const { Router } = require('express')
const express = require('express')
const router = express.Router()
const destinationsCtrl = require('../controllers/destinations')

router.get('/new', destinationsCtrl.newDestination)
router.post('/', destinationsCtrl.create)

router.post('/flight/:id/', destinationsCtrl.addDestination)

module.exports = router