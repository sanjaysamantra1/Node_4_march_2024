const mongoose = require('mongoose')

const connectToDatabse = async () => {
    await mongoose.connect('mongodb://0.0.0.0:27017/march_4_2024');
    console.log('MOngo Connection established')
}
module.exports = connectToDatabse;