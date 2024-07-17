const mongoose = require('mongoose');

const chatSessionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    sessionData: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('ChatSession', chatSessionSchema);
