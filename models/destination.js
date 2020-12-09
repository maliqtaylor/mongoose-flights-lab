const mongoose = require('mongoose')
const { Schema } = mongoose

const destinationSchema = new Schema({
  airport: { type: String, required: true, unique: true },
})

module.exports = mongoose.model('Destination', destinationSchema)