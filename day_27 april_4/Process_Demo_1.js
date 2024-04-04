require('dotenv').config();

console.log(process.env.S3_BUCKET)
console.log(process.env.SECRET_KEY)
console.log(process.env.NODE_ENV)

setTimeout(() => { console.log('I am inside setTimeout') });
process.nextTick(() => { console.log('I am inside next tick') });