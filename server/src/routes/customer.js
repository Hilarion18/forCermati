var express = require('express');
var router = express.Router();
var {getCustomer, createCustomer} = require('../controllers/customerController')


router.get('/', getCustomer)
router.post('/', createCustomer)

module.exports = router;
