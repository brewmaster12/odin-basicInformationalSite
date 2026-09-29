const http = require('node:http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let file;

    if (req.url === '/') {
        file = './index.html';
    } else if (req.url === '/about') {
        file = './about.html';
    } else if (req.url === '/contact-me') {
        file = './contact-me.html';
    } else {
        file = './404.html'
    }

    console.log(file);
});

server.listen(8000);