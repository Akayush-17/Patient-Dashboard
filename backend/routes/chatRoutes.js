const express = require('express');
const router = express.Router();
const {saveChatSession} = require('../controllers/chatController')

router.post('/saveChatSession', saveChatSession);

module.exports = router;