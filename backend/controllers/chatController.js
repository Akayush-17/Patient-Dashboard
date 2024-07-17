const ChatSession = require('../models/ChatSession');

const saveChatSession = async (req, res) => {
    try {
        const { userId, sessionData } = req.body; 
        const newSession = new ChatSession({
            userId,
            sessionData
        });
        await newSession.save();
        res.status(200).send('Chat session saved');
    } catch (error) {
        console.error('Error saving chat session:', error);
        res.status(500).send('Server error');
    }
};

module.exports = { saveChatSession };
