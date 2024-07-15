const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Patient = require('../models/Patient');
require('dotenv').config();

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const patient = new Patient({ name, email, password: hashedPassword });
  await patient.save();
  res.status(201).send('Patient registered');
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const patient = await Patient.findOne({ email });
  if (!patient || !await bcrypt.compare(password, patient.password)) {
    return res.status(401).send('Invalid credentials');
  }
  const token = jwt.sign({ patientId: patient._id }, process.env.JWT_SECRET);
  res.json({ token });
};
