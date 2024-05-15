const fs = require('fs');
const writeStream = fs.createWriteStream('./file1.txt');

for (let i = 1; i <= 1000; i++) {
    writeStream.write('Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.\n')
}

writeStream.end();