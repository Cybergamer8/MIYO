const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000; // Port number to listen on
const filePath = path.join(__dirname, 'index.html'); // Path to your index.html

const server = http.createServer((req, res) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});