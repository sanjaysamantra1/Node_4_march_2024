const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    role: String,
    token: String
});

let UserModel = mongoose.model('users', userSchema);
module.exports = UserModel;