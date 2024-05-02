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
let cancelUploads = false;
let options = {
    multiples: true,
    maxFileSize: 1024 * 1024 * 5,
    filter: function ({ name, originalFilename, mimetype }) {
        // keep only images
        const valid = mimetype && mimetype.includes("image");
        if (!valid) {
            form.emit('error', new Error('validation failed')); // optional make form.parse error
            cancelUploads = true; //variable to make filter return false after the first problem
        }
        return valid && !cancelUploads;
    }
}
const form = formidable(options);

app.post('/api/upload', async (req, res) => {
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
        res.send('Files Uploaded Successfully')
        // res.json({files})

    } catch (err) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end(String(err));
        return;
    }
});

app.listen(5000, () => { console.log('http://localhost:5000') })
