'use strict';
const patrones={llena:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],fila1:[0,1,2,3],fila2:[4,5,6,7],fila3:[8,9,10,11],fila4:[12,13,14,15],columna1:[0,4,8,12],columna2:[1,5,9,13],columna3:[2,6,10,14],columna4:[3,7,11,15],diagonal1:[0,5,10,15],diagonal2:[3,6,9,12],esquinas:[0,3,12,15],centro:[5,6,9,10]};
function patronesCompletos(tabla,cantadas){const set=new Set(cantadas);return Object.entries(patrones).filter(([,idx])=>idx.every(i=>set.has(tabla[i]))).map(([n])=>n)}
function cartaQueFalta(tabla,cantadas){const set=new Set(cantadas);for(const [nombre,idx] of Object.entries(patrones)){const faltan=idx.map(i=>tabla[i]).filter(id=>!set.has(id));if(faltan.length===1)return {patron:nombre,cartaId:faltan[0]};}return null}
module.exports={patrones,patronesCompletos,cartaQueFalta};
