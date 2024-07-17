const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { ChatSession } = require("../models/ChatSession");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

router.post("/send-message", async (req, res) => {
  try {
    const { message, userId } = req.body;
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      return res.status(401).json({ error: "Authorization token is missing" });
    }

    const sessionId = authorizationHeader.split(" ")[1];

    let chatSession = await ChatSession.findOne({ userId, sessionId });

    if (!chatSession) {
      chatSession = new ChatSession({ userId, sessionId, messages: [] });
    }

    chatSession.messages.push({
      role: "user",
      text: message,
    });

    const sanitizedHistory = chatSession.messages.map((chat) => ({
      role: chat.role,
      parts: [{ text: chat.text }],
    }));

    const result = await model.startChat({
      history: sanitizedHistory,
      generationConfig: { maxOutputTokens: 100 },
    });

    const response = await result.sendMessage(message);
    const botResponse = await response.response;

    chatSession.messages.push({
      role: "model",
      text: botResponse.text(),
    });

    await chatSession.save();

    res.json({ response: botResponse.text() });
  } catch (error) {
    console.error("Error handling chat message:", error);
    res.status(500).json({ error: "Failed to process the chat message." });
  }
});

// Retrieve chat history for a user
router.get("/chat-history/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const chatSessions = await ChatSession.find({ userId });

    const chatHistory = await Promise.all(
      chatSessions.map(async (session) => {
        return { sessionId: session.sessionId, messages: session.messages };
      })
    );

    res.status(200).json(chatHistory);
  } catch (error) {
    console.error("Error retrieving chat history:", error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
