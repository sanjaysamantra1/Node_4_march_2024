const { execFile } = require('child_process');
const { writeFile } = require('fs');

execFile(`${__dirname}/demo.bat`, (error, stdout, stderr) => {
    // if the command is not found
    if (error) {
        console.log('no command found');
        return;
    }
    // if error occurs while executing the command
    if (stderr) {
        console.log('command could not be executed');
        return;
    }
    writeFile('abc.txt', stdout, (err, data) => {
        if (err) throw err;
        console.log('data written succesfully')
    });
})