const Flight = require('../models/flight')

module.exports = {
  index,
  newFlight,
  create,
  show,
}

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render('flights/index', { title: "Flights", flights })
  })
}


function newFlight(req, res) {
  res.render('flights/new', { title: "Add Flight", err: '' })
}

function create(req, res) {
  const flight = new Flight(req.body)

  flight.save(function (err) {
    if (err) {
      console.log(err)
      return res.render('flights/new', { err: err, title: 'Error' })
    }
    res.redirect('/')
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
    .populate('cast')
    .then((flight) => {
      res.render('flights/details', { title: 'Flight Details', flight })
    })
    .catch((err) => {
      console.log(err)
    })
}