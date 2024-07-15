const express = require('express');
const { getProfile, getInteractions, saveInteraction } = require('../controllers/InteractionController');
const authenticateToken = require('../middleware/authentication');

const router = express.Router();

router.get('/profile', authenticateToken, getProfile);
router.get('/interactions', authenticateToken, getInteractions);
router.post('/interactions', authenticateToken, saveInteraction);

module.exports = router;
