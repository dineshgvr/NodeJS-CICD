const mongoose = require('mongoose');

const employee = new mongoose.Schema({
    firstName : String,
    lastName : String,
    age: Number,
    empId: {type: Number, default: 0},
})

module.exports = mongoose.model('Employee',employee);