const express = require('express');
const app = express();
const { formidable } = require('formidable');

app.get('/', (req, res) => {
    res.send(`
    <form action="/api/upload" method="POST" encType="multipart/form-data">
        <div>Text Field-1: <input name='username' /></div>
        <div>Text Field-2: <input name='useradd' /></div>
        <div>File: <input type='file' name='myFiles' multiple /></div>
        <input type="submit" value="Upload" />
    </form>
    `)
})

app.post('/api/upload', async (req, res) => {
    const form = formidable({});
    let fields;
    let files;
    try {
        [fields, files] = await form.parse(req);
    } catch (err) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end(String(err));
        return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ fields, files }));
});

app.listen(5000, () => { console.log('http://localhost:5000') })
