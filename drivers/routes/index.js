var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {});
});

router.get('/driverapp', function(req, res, next) {
	res.render('driverapp', {});
});

router.get('/dashboard', function(req, res, next) {
	res.render('dashboard', {});
});

router.get('/customerapp', function(req, res, next) {
	res.render('customerapp', {});
});

module.exports = router;