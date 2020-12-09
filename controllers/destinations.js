const Destination = require('../models/destination')
const Flight = require('../models/flight')

module.exports = {
  newDestination,
  create
}

function newDestination(req, res) {
  Destination.find({}, function (err, destinations) {
    res.render('destinations/new', { title: 'Add Destination', destinations })
  })
}

function create(req, res) {
  Destination.create(req.body, function (err, performer) {
    res.redirect('/destinations/new')
  })
}