'use strict';
function crearEnviadorConsola(log=console.log){return {async enviar(m){log('[push simulado]',JSON.stringify(m));return 'simulado';}}}
function crearEnviadorFcm(){const admin=require('firebase-admin');if(!admin.apps.length)admin.initializeApp();return {enviar:m=>admin.messaging().send(m)}}
module.exports={crearEnviadorConsola,crearEnviadorFcm};
