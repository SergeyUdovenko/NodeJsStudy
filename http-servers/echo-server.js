const net = require('net');
const port = 3011;

const server = net.createServer();
server.on('connection', socket => {
    console.log('Client conected!');

    socket.on('data', data => {
        console.log(data.toString());
    });

    socket.pipe(socket)
});

server.listen(port);