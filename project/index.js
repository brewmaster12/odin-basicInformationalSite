const http = require('node:http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
});

server.listen(8000);