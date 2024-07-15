const Doctor = require('../models/Doctor');

exports.createDoctor = async (req, res) => {
  try {
    const { name, specialization } = req.body;

    const newDoctor = new Doctor({
      name,
      specialization
    });

    await newDoctor.save();

    res.status(201).json(newDoctor);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
