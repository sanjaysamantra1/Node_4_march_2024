const express = require('express');
const app = express();
const { formidable } = require('formidable');
const fs = require('fs');

app.get('/', (req, res) => {
    res.send(`
    <form action="/api/upload" method="POST" encType="multipart/form-data">
        <div>Text Field-1: <input name='username' /></div>
        <div>Text Field-2: <input name='useradd' /></div>
        <div>File: <input type='file' name='myFiles' /></div>
        <input type="submit" value="Upload" />
    </form>
    `)
})

app.post('/api/upload', async (req, res) => {
    const form = formidable();
    let fields;
    let files;
    try {
        [fields, files] = await form.parse(req);
        // console.log(files.myFiles[0])
        // let oldPath = files.myFiles[0].filepath;
        // let newPath = `${__dirname}/assets/${files.myFiles[0].originalFilename}`;
        // console.log(oldPath,newPath)
        // let imageFile = fs.readFileSync(oldPath);
        // fs.writeFileSync(newPath, imageFile);
        // res.send('File Uploaded Succesfully!!!')
        res.json({ files, fields })
    } catch (err) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end(String(err));
        return;
    }
});

app.listen(5000, () => { console.log('http://localhost:5000') })
