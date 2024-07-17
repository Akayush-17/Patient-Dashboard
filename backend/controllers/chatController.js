const { ChatSession, ChatMessage } = require('../models/ChatSession');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const saveChatMessage = async (req, res) => {
  try {
    const { message, userId } = req.body;
    const authorizationHeader = req.headers.authorization;
  
    if (!authorizationHeader) {
      return res.status(401).json({ error: 'Authorization token is missing' });
    }

    const sessionId = authorizationHeader.split(' ')[1];

    // Find or create the chat session
    let chatSession = await ChatSession.findOne({ userId, sessionId });

    if (!chatSession) {
      chatSession = new ChatSession({ userId, sessionId, messages: [] });
    }

    // Prepare chat history for the model
    const sanitizedHistory = chatSession.messages.map(chat => ({
      role: chat.role,
      parts: [{ text: chat.message }]
    }));

    const result = await model.startChat({
      history: sanitizedHistory,
      generationConfig: { maxOutputTokens: 100 }
    });

    const response = await result.sendMessage(message);
    const botResponse = await response.response;

    // Save user message in the chat session
    chatSession.messages.push({
      role: 'user',
      message,
      timestamp: Date.now()
    });

    // Save bot response in the chat session
    chatSession.messages.push({
      role: 'model',
      message: botResponse.text(),
      timestamp: Date.now()
    });

    await chatSession.save();

    res.json({ response: botResponse.text() });
  } catch (error) {
    console.error('Error handling chat message:', error);
    res.status(500).json({ error: 'Failed to process the chat message.' });
  }
};

const getChatHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const chatSessions = await ChatSession.find({ userId });

    const chatHistory = await Promise.all(chatSessions.map(async (session) => {
      return { sessionId: session.sessionId, messages: session.messages };
    }));

    res.status(200).json(chatHistory);
  } catch (error) {
    console.error('Error retrieving chat history:', error);
    res.status(500).send('Server error');
  }
};

module.exports = { saveChatMessage, getChatHistory };
