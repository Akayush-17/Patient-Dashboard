const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, process.env.JWT_SECRET, (err, patient) => {
    if (err) return res.sendStatus(403);
    req.patient = patient;
    next();
  });
};

module.exports = authenticateToken;
