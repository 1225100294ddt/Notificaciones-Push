'use strict';
function mensajeCarta(sala,carta){return {topic:`sala_${sala}`,notification:{title:`🃏 ${carta.nombre}`,body:carta.pista},data:{tipo:'carta',sala,n:String(carta.n),cartaId:String(carta.id),nombre:carta.nombre,pista:carta.pista},android:{priority:'high',ttl:60000,collapseKey:`carta_${sala}`,notification:{channelId:'cartas',tag:`carta_${sala}`}}};}
module.exports={mensajeCarta};
