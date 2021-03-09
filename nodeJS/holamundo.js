//se carga el modulo HTTP
var http = require('http');

//crea el puerto HTTP con el puerto 8080
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Helo World!');
}).listen(8080);

//url para el acceso al servidor
console.log('Servidor en la url http://127.0.0.1:8080/');