const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const urlObj = url.parse(req.url, true);
    const queryParams = urlObj.query;
    const { name, add } = queryParams;
    let msg = ''
    if (name && add) {
        msg = `${name} is from ${add}`;
    } else {
        msg = 'Bad request'
    }
    res.write(msg);
    res.end();
});

server.listen(5000, () => {
    console.log(`Server listening at http://localhost:5000`)
});