const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Patient = require('../models/Patient');
require('dotenv').config();

exports.register = async (req, res) => {
  const { name, email, password, gender, blood,age,address, relative, dob } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const patient = new Patient({ name, email,gender,blood,age,address,relative,dob, password: hashedPassword });
  await patient.save();
  res.status(201).send('Patient registered');
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const patient = await Patient.findOne({ email });
    if (!patient || !await bcrypt.compare(password, patient.password)) {
      return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign(
      { patientId: patient._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } 
    );

    res.json({ token, patientId: patient._id }); 
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Server error');
  }
};