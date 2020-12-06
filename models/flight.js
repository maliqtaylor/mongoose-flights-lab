const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Jet Blue', 'Delta', 'Southwest', 'United'],
    required: true,
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'JFK', 'LAX'],
    required: true,
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true
  },
  departure: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Flight', flightSchema)