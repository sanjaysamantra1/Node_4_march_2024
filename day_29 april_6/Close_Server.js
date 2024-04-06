let http = require('http');
let users = require('./users.json');

const server = http.createServer((req, res) => {
    res.write(JSON.stringify(users));
    res.end();
});

server.listen(5000, () => {
    console.log(`Server listening at http://localhost:5000`)
});


setTimeout(() => {
    server.close();
}, 10000);
