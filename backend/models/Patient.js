const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    name: String,
    email: String,
    gender:String,
    age:String,
    address:String,
    blood:String,
    dob:String,
    relative:String,
    password: String,
    linkedDoctors:[{type:mongoose.Schema.Types.ObjectId, ref:'Doctor'}]
});

module.exports = mongoose.model('Patient', PatientSchema)