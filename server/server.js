const express = require('express');
const socketIO = require('socket.io'); //esto no trabaja directamente con la app de express, pero sí con el servidor http que trae node
const http = require('http');

const path = require('path');

const app = express(); //por dentro el server express llama a funciones de http
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//inicializar el socketIO. Esta es la comunicación del backend
module.exports.io = socketIO(server); //para utilizarlo en socket.js
require('./sockets/socket');

//como se usa el server http, cambia app.listen a server.listen
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});