var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('file1.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('file2.txt');

// Pipe the read and write operations
// read file1.txt and write data to file2.txt
readerStream.pipe(writerStream);

console.log("Program Ended");