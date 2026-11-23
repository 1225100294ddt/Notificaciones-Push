'use strict';const test=require('node:test');const assert=require('node:assert/strict');const {CARTAS,barajar,generarTabla}=require('../baraja');const {patronesCompletos}=require('../lineas');const {Sala}=require('../sala');
test('mazo con 54 cartas únicas',()=>{assert.equal(CARTAS.length,54);assert.equal(new Set(CARTAS.map(c=>c.nombre)).size,54)});
test('barajar conserva las 54 cartas',()=>{assert.deepEqual([...barajar(7)].sort((a,b)=>a-b),Array.from({length:54},(_,i)=>i+1))});
test('tabla con 16 cartas distintas',()=>{const t=generarTabla(1);assert.equal(t.length,16);assert.equal(new Set(t).size,16)});
test('patrones detectan fila completa',()=>{assert.deepEqual(patronesCompletos([1,2,3,4,...Array.from({length:12},(_,i)=>i+5)],[1,2,3,4]),['fila1'])});
test('jugador puede unirse y el cantor canta',()=>{const s=new Sala('ABC','secreto',barajar(1));const j=s.unir('Ana');assert.equal(j.tabla.length,16);const c=s.cantar('secreto');assert.equal(c.n,1)});
test('clave incorrecta no permite cantar',()=>{const s=new Sala('ABC','secreto',barajar(1));assert.throws(()=>s.cantar('mala'),/Credenciales/)});
