const http = require("html");
const port = 8081;

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-type': 'text/html' });
    response.write('<h1>HelloWorld</h1>');
});