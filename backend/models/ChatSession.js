const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const chatMessageSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    sessionId: {
        type: String,
        required: true
    },
    messages: [messageSchema]
});

const ChatSession = mongoose.model('ChatSession', chatMessageSchema);
const ChatMessage = mongoose.model('ChatMessage', chatMessageSchema);

module.exports = { ChatSession, ChatMessage };
