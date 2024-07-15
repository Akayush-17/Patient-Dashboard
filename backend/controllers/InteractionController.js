const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor'); 
const Interaction = require('../models/Interaction');

exports.getProfile = async (req, res) => {
  try {
    const patient = await Patient.findById(req.patient.patientId).populate('linkedDoctors');
    res.json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

exports.getInteractions = async (req, res) => {
  try {
    const interactions = await Interaction.find({ patient: req.patient.patientId }).populate('doctor');
    res.json(interactions);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

exports.saveInteraction = async (req, res) => {
  try {
    const { doctorId, query, response } = req.body;
    const interaction = new Interaction({
      patient: req.patient.patientId,
      doctor: doctorId,
      query,
      response
    });
    await interaction.save();
    res.status(201).send('Interaction saved');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
