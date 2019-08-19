var express = require('express');
var router = express.Router();
var {getPromo, createPromo, getCategoryPromo, getCategoryPromoDetail, createSeedsPromo} = require('../controllers/promoController')

router.get('/', getPromo)
router.post('/', createPromo)
router.post('/category', getCategoryPromo)
router.post('/category/detail', getCategoryPromoDetail)
router.post('/category/seeds', createSeedsPromo)

module.exports = router