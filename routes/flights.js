var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// ALL routes start with '/flights'
router.get('/new', flightsCtrl.new);
// POST /flights
router.post('/', flightsCtrl.create);

router.get('/', flightsCtrl.index);

router.get('/:id', flightsCtrl.show);


module.exports = router;
