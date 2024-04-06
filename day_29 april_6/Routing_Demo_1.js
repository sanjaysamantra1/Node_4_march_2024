let http = require('http');
let users = require('./users.json');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write(`
            <h1>You are in Home Route</h1>
            <a href="http://localhost:5000/users">users</a>  Get All Users <br/><br/>
            <a href="http://localhost:5000/posts">posts</a>  Get All Posts <br/><br/>
            <a href="http://localhost:5000/comments">comments</a>  Get All comments <br/><br/>
            `)
    } else if (url === '/users') {
        res.write(JSON.stringify(users));
    } else if (url === '/posts') {
        res.write('<h1>All POsts</h1>');
    } else if (url === '/comments') {
        res.write('<h1>All Comments</h1>');
    }
    res.end();
});

server.listen(5000, () => {
    console.log(`Server listening at http://localhost:5000`)
});



