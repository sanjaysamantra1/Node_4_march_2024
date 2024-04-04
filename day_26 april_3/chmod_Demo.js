const fs = require('fs');

fs.chmod('../day_25 april_2/File2.txt', fs.constants.S_IRUSR, () => {
    console.log('only reada access given to this file');

    // read the file
    console.log('reading file', fs.readFileSync('../day_25 april_2/file1.txt', 'utf-8'))

    try {
        fs.writeFileSync('../day_25 april_2/file1.txt', 'Helloooooooooooooo');
    } catch (err) {
        console.log('You dont have write permissions')
    }
})

