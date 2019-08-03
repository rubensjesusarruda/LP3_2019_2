const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;//ok
    res.setHeader('Content-Type','text/plain');
    res.end('Fala piazada!');
});

server.listen(port, hostname,() => console.log('Servidor Iniciado'));