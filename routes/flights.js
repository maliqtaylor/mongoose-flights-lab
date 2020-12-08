var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights')

router.get('/', flightCtrl.index)
router.post('/', flightCtrl.create)
router.get('/new', flightCtrl.newFlight)
router.get('/:id', flightCtrl.show)

module.exports = router;