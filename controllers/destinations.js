const Destination = require('../models/destination')
const Flight = require('../models/flight')

module.exports = {
  newDestination,
  create,
  addDestination
}

function newDestination(req, res) {
  Destination.find({}, function (err, destinations) {
    res.render('destinations/new', { title: 'Add Destination', destinations })
  })
}

function create(req, res) {
  Destination.create(req.body, function (err, destination) {
    res.redirect('/destinations/new')
  })
}

function addDestination(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    flight.destinations.push(req.body.destinationId)
    flight.save(function (err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}