const express = require('express');
const app = express();
const { formidable } = require('formidable');
const fs = require('fs');

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
let options = {
    multiples: true,
    maxFileSize: 1024 * 1024 * 5,
    filter: ({ name, mimetype }) => {
        return mimetype && mimetype.includes('image')
    }
}

app.post('/api/upload', async (req, res) => {
    const form = formidable(options);
    let fields;
    let files;
    try {
        [fields, files] = await form.parse(req);
        for (file of files.myFiles) {
            let oldPath = file.filepath;
            let newPath = `${__dirname}/assets/${file.originalFilename}`;
            let imageFile = fs.readFileSync(oldPath);
            fs.writeFileSync(newPath, imageFile);
        }
        res.send({files,fields})
    } catch (err) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end(String(err));
        return;
    }
});

app.listen(5000, () => { console.log('http://localhost:5000') })
