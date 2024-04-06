let http = require('http');
let users = require('./users.json');

const server = http.createServer((req, res) => {
    const url = req.url;
    let userId = +req.url.split('users/').pop();
    if (url === '/users') { //  All Users
        res.write(JSON.stringify(users));
    }
    if (url.includes('/users') && userId) { // 1 user
        let userData = users.find(user => user.id === userId);
        res.write(JSON.stringify(userData));
    }
    res.end();
});

server.listen(5000, () => {
    console.log(`Server listening at http://localhost:5000`)
});