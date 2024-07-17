const ChatSession = require('../models/ChatSession')

const saveChatSession =async (req,res) => {
    try {
        const {sessionData} = req.body;
        const newSession = new ChatSession({sessionData})
        await newSession.save();
        res.status(200).send('Chat session saved');
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};

module.exports ={saveChatSession}