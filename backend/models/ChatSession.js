const mongoose = require('mongoose');

const chatSessionSchema = new mongoose.Schema({
    Session:{
        type:Array,
        required:true,
    }
})

module.exports = mongoose.model('ChatSession', chatSessionSchema)