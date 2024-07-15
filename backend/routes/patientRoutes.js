const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');


router.post('/link-doctor',  patientController.linkDoctor); 

module.exports = router;
