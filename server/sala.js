'use strict';
const crypto=require('node:crypto');const {barajar,generarTabla,cartaPorId}=require('./baraja');const {patronesCompletos,cartaQueFalta}=require('./lineas');
class Sala{
 constructor(id,claveCantor,mazo){this.id=id;this.claveCantor=claveCantor;this.mazo=mazo;this.indice=0;this.cartas=[];this.jugadores=new Map();this.ganador=null;this.ultimaVez=0;}
 unir(nombre,destino=null){if(!/^[\p{L}0-9 _-]{1,20}$/u.test(nombre))throw Error('Nombre inválido');if(this.jugadores.size>=30)throw Error('Sala llena');const clave=crypto.randomBytes(16).toString('hex');const tabla=generarTabla(crypto.randomInt(1,1e9));this.jugadores.set(nombre,{nombre,clave,tabla,destino,casi:false});return {nombre,claveJugador:clave,tabla,cartas:this.cartas.map(x=>x)};}
 cantar(clave){if(clave!==this.claveCantor)throw Error('Credenciales inválidas');if(this.ganador)throw Error('La partida terminó');if(Date.now()-this.ultimaVez<2000)throw Error('Espera dos segundos');if(this.indice>=54)throw Error('No quedan cartas');this.ultimaVez=Date.now();const c=cartaPorId(this.mazo[this.indice++]);const carta={...c,n:this.indice};this.cartas.push(carta);return carta;}
 estado(desde=0){return {ultima:this.indice,cartas:this.cartas.filter(c=>c.n>desde),ganador:this.ganador};}
 reclamar(nombre,clave){const j=this.jugadores.get(nombre);if(!j||j.clave!==clave)throw Error('Credenciales inválidas');const p=patronesCompletos(j.tabla,this.cartas.map(c=>c.id));if(!p.length)return {gano:false};this.ganador=nombre;return {gano:true,patron:p[0]};}
}
class Salas{constructor(){this.mapa=new Map()}crear(){const id=crypto.randomBytes(3).toString('hex').toUpperCase();const claveCantor=crypto.randomBytes(16).toString('hex');const s=new Sala(id,claveCantor,barajar());this.mapa.set(id,s);return {sala:s,claveCantor};}obtener(id){const s=this.mapa.get(String(id||'').toUpperCase());if(!s)throw Error('Sala no encontrada');return s;}}
module.exports={Sala,Salas};
