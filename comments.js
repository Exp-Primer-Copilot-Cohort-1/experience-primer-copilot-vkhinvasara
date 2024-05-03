// Create a web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const comments = [];

const server = http.createServer((req, res) => {
    let urlObj = url.parse(req.url, true);
    let pathname = urlObj.pathname;
    if (pathname === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                res.end('Server Error');
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data);
        });
    } else if (pathname === '/comment') {
        let comment = urlObj.query;
        comments.push(comment);
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end(JSON.stringify(comments));
    } else {
        fs.readFile(path.join(__dirname, pathname), 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.end('Not Found');
            }
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end(data);
        });
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://      localhost:3000');
});