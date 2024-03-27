const http = require('http');
const PORT = process.argv[2] || 5000;

// create a server
const myServer = http.createServer((req, res) => {
    res.write('<h1>This is Response From Server')
});

myServer.listen(PORT, () => { console.log(`server running at http://localhost:${PORT}`) });
