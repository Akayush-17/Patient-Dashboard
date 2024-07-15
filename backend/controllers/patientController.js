const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');

exports.linkDoctor = async (req, res) => {
  try {
    const { patientId, doctorId } = req.body;

    const patient = await Patient.findById(patientId);
    if (!patient) {
      return res.status(404).json({ msg: 'Patient not found' });
    }

    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ msg: 'Doctor not found' });
    }

    if (!patient.linkedDoctors.includes(doctorId)) {
      patient.linkedDoctors.push(doctorId);
      await patient.save();
    }

    res.status(200).json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
