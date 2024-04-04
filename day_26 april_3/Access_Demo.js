const fs = require('fs');

fs.access('../day_25 april_2/file1.txt', fs.W_OK, (err, res) => {
    if(err){
        console.log('no write access')
    }else{
        console.log('write access present')
    }
})
fs.access('../day_25 april_2/file1.txt', fs.R_OK, (err, res) => {
    if(err){
        console.log('no read access')
    }else{
        console.log('read access present')
    }
})
fs.access('../day_25 april_2/file1.txt', fs.X_OK, (err, res) => {
    if(err){
        console.log('no execute access')
    }else{
        console.log('execute access present')
    }
})