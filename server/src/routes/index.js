var express = require('express');
var router = express.Router();
var {getPromo} = require('../controllers/promoController')
var user = require('./users')
var promo = require('./promo')
var customer = require('./customer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/user', user)
router.use('/promo', promo)
router.use('/customer', customer)


module.exports = router;
