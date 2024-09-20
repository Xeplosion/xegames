const http = require('http');
const port = process.env.PORT || 1337;
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res) {
    // Specify path for HTML file.
    const filePath = path.join(__dirname, 'index.html');

    // Read HTML file.
    fs.readFile(filePath, function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found\n');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}).listen(port);
