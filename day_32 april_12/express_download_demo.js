const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <p>please click the below link to download a file<br/>
        <a href="http://localhost:5000/download">download node image</a>
        <a href="http://localhost:5000/openFile">open node image</a>
    `);
});
app.get('/openFile', (req, res) => {
    res.sendFile(path.resolve(__dirname, './node.png'))
});
app.get('/download', (req, res) => {
    res.download(path.resolve(__dirname, './node.png'))
});

app.listen(5000, () => {
    console.log('server listening on http://localhost:5000')
});