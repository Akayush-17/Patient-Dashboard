const mongoose = require("mongoose");

const InteractionSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  query: String,
  response: String,
  interactionDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Interaction", InteractionSchema);
