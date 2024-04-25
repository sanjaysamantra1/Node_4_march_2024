const mongoose = require('mongoose');

// create Schema
const employeeSchema = new mongoose.Schema({
    eId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
    },
    sal: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
    }
});
// create a model
const employeeModel = mongoose.model('employees', employeeSchema);
module.exports = employeeModel;