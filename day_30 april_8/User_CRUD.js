const http = require('http');
const users = require('../day_29 april_6/users.json');

const server = http.createServer((req, res) => {
    const { url, method } = req;
    const userId = url.split('users/').pop();

    if (url === '/') {
        res.write('<h1>Home Page</h1>');
    } else if (url === '/users' && method === 'GET') {
        res.write(JSON.stringify(users));
    } else if (url.includes('/users') && method === 'GET' && userId) {
        const user = users.find(user => user.id == userId);
        console.log(user)
        res.write(JSON.stringify(user));
    } else if (url === '/users' && method === 'POST') {
        res.write('<h1>User Created Successfully</h1>');
    } else if (url === '/users' && method === 'PUT') {
        res.write('<h1>User UPdated Successfully</h1>');
    } else if (url === '/users' && method === 'DELETE') {
        res.write('<h1>User Deleted Successfully</h1>');
    }

    res.end();
});

server.listen(5000, () => {
    console.log(`Server listening at http://localhost:5000`)
});