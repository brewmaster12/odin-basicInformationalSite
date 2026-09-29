const http = require('node:http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let file;
    let status;

    if (req.url === '/') {
        file = './index.html';
        status = 200;
    } else if (req.url === '/about') {
        file = './about.html';
        status = 200;
    } else if (req.url === '/contact-me') {
        file = './contact-me.html';
        status = 200;
    } else {
        file = './404.html';
        status = 404;
    }

    fs.readFile(file, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }

        res.writeHead(status, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
  });
});

server.listen(8000);