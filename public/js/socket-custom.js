var socket = io(); //esta funcion es gracias a la libreria que acabamos de importar "socket.io/socket.io.js". Se utiliza var para aumentar la compatibilidad web
socket.on('connect', function() { //solo con esto nuestro cod frontend estará pendiente de cualquier cambio que se sucede en el backend
    console.log('Conectado al servidor');
});

//.on es para escuchar informacion, sucesos
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})

//.emit es para enviar informacion al servidor. Esto lo hará instanteamente cuando ya tenga la conexion
socket.emit('enviarMensaje', {
    usuario: 'Yamilet',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//escuchar el mensaje del servidor que hizo en server.js con el  client.emit('enviarMensaje',
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
})