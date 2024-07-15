const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    linkedDoctors:[{type:mongoose.Schema.Types.ObjectId, ref:'Doctor'}]
});

module.exports = mongoose.model('Patient', PatientSchema)