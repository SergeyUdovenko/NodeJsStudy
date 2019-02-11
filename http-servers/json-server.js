const http = require('http');
const product = require('./files/product');

const port = 3011;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(product))
});
server.listen(port, () => console.log(`Listening: localhost:${port}`));