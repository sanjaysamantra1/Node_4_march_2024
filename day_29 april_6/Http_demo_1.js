const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    res.write('<h1>This is a Response From Server</h1>');
    res.end();
});

server.listen(5000, () => {
    console.log(`Server listening at http://localhost:5000`)
});