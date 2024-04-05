const { spawn } = require('child_process');
const { writeFileSync, appendFileSync, readdirSync } = require('fs');

let allFiles = readdirSync(__dirname);
let allJavascriptFiles = allFiles.filter(file => file.includes('demo'));

for (let file of allJavascriptFiles) {
    const myProcess = spawn("node", [file]);

    myProcess.stdout.on('data', (data) => {
        appendFileSync('abc.txt', data);
    });

    myProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    myProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}
