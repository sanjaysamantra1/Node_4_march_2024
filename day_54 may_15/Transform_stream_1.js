const {Transform} = require('stream')

const uppercase = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    },
});

uppercase.on('data',(chunk)=>{
    console.log(chunk.toString())
})
uppercase.write('Helloiooooo','utf-8')
uppercase.write('hiiiiiiiiiiii','utf-8')

