const Interaction = require('../models/Interaction');
const Patient = require('../models/Patient');

exports.getProfile = async (req, res) => {
  const patient = await Patient.findById(req.patient.patientId).populate('linkedDoctors');
  res.json(patient);
};

exports.getInteractions = async (req, res) => {
  const interactions = await Interaction.find({ patient: req.patient.patientId }).populate('doctor');
  res.json(interactions);
};

exports.saveInteraction = async (req, res) => {
  const { doctorId, query, response } = req.body;
  const interaction = new Interaction({ patient: req.patient.patientId, doctor: doctorId, query, response });
  await interaction.save();
  res.status(201).send('Interaction saved');
};
