const { io } = require('../server')

//client este objeto contiene toda la info de la computadora o de la conexion que se establecio
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    // con el evento disconnect se puede manejar por ejemplo la salida de un chat y manejar algun tipo de limpieza. "X usuario salió de la conexion"
    // nada mas cierre el navegador o la pestaña de la app se ejecutará este evento disconnect y ahí uno lo aprovecha para mostrar mensajes o lo q sea  
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente con el mensaje que dio en index.html socket.emit('enviarMensaje'
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //se envia para todos los usuarios conectados, tipo chat
        client.broadcast.emit('enviarMensaje', data);

        // if (data.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!!!!'
        //     });
        // }
    });
});