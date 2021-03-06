const mongoose = require('mongoose');

const buildStepSchema = new mongoose.Schema({
  food: { type: String, required: true, trim: true },
  totalFood: { type: String, required: true, trim: true },
  description: { type: String, required: true },
}, { timestamp: true });

const buildSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  race: { type: String, required: true, trim: true },
  opposingRace: { type: String, required: true, trim: true },
  matchup: { type: String, required: true, trim: true },
  description: { type: String, required: false, trim: true },
  patch: { type: String, required: true },
  ownerId: { type: String, required: true },
  ownerUsername: { type: String, required: true },
  buildSteps: [buildStepSchema],
}, { timestamps: true });

module.exports = mongoose.model('Build', buildSchema);
