const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const ChatSession = require('../models/ChatSession');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

router.post('/send-message', async (req, res) => {
  try {
    const { message, userId } = req.body; 
    let chat = req.session.chat || {
      history: [],
      generationConfig: { maxOutputTokens: 100 },
      userId: userId 
    };

    chat.history.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const sanitizedHistory = chat.history.map(entry => ({
      role: entry.role,
      parts: entry.parts
    }));

    const result = await model.startChat({
      history: sanitizedHistory,
      generationConfig: chat.generationConfig
    });

    const response = await result.sendMessage(message);
    const botResponse = await response.response;

    chat.history.push({
      role: 'model',
      parts: [{ text: botResponse.text() }]
    });

    req.session.chat = chat;


    await ChatSession.updateOne(
      { userId: userId },
      { userId: userId, sessionData: chat },
      { upsert: true }
    );

    res.json({ response: botResponse.text() });
  } catch (error) {
    console.error('Error handling chat message:', error);
    res.status(500).json({ error: 'Failed to process the chat message.' });
  }
});

module.exports = router;
