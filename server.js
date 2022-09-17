const http = require('http');
const port = 8081;

const todolist = ['Music', 'Play'];
http
    .createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>HelloWorld</h1>');
        const { method, url } = req;

        if (url === '/todos') {
            if (method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(todolist.toString());
            } else {
                res.writeHead(501);
            }
        } else {
            res.writeHead(404);
        }
        res.end();
    }).listen(port, () => {
        console.log(`Server started at ${port}`);
    });

    //http://localhost:8081