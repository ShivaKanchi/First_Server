const http = require('http');
const port = 8081;

http
    .createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<h1>HelloWorld</h1>');
        response.end();
    }).listen(port, () => {
        console.log('Server started at port', port);
    });

    //http://localhost:8081