const url = require('url');
let urlStr = 'http://localhost:8080/default.htm?year=2023&month=february';
let urlObj = url.parse(urlStr, true);
console.log(urlObj)

let urlstring = url.format(urlObj)
console.log(urlstring)