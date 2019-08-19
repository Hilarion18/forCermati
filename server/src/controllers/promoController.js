const Promo = require('../models/promo')

const getPromo = async (req,res) => {
  console.log(`===== masuk sini`)
  Promo.find()
    .then((response) => {
      res.status(200).json({
        response
      })
      console.log(`===== response`, response)
    })
    .catch((err) => {
      res.status(400).json({
        err
      })
      console.log(`===== err`, err)
    })
} 

function createPromo(req,res) {
  Promo.create(req.body)
    .then((response) => {
      res.status(200).json({
        response
      })
      console.log(`====== response`, response)
    })
    .catch((err) => {
      res.status(200).json({
        err
      })
      console.log(`====== err`, err)
    })
}

function getCategoryPromo(req,res) {
  console.log(`===== req.headers`, req.headers)
  console.log(`===== req.body`, req.body)
  const result = {
    promos1: [],
    promos2: []
  }
  Promo.find({category: req.body.category})
    .then((response) => {
      for (let i in response) {
        if (i < 3) {
          result.promos1.push(response[i])
        } else if (i < 6) {
          result.promos2.push(response[i])
        }
      }
      res.status(200).json({
        result
      })
      console.log(`====== response`, result)
    })
    .catch((err) => {
      res.status(200).json({
        err
      })
      console.log(`====== err`, err)
    })
}

function getCategoryPromoDetail(req,res) {
  Promo.findOne({_id: req.body.promoId})
    .then((response) => {
      res.status(200).json({
        response
      })
      console.log(`====== response`, response)
    })
    .catch((err) => {
      res.status(200).json({
        err
      })
      console.log(`====== err`, err)
    })
}

function createSeedsPromo(req,res) {
  for (let i in req.body) {
    Promo.create(req.body[i])
    .then((response) => {
      res.status(200).json({
        response
      })
      console.log(`====== response`, response)
    })
    .catch((err) => {
      res.status(200).json({
        err
      })
      console.log(`====== err`, err)
    })
  }
}

module.exports = {
  getPromo,
  createPromo,
  getCategoryPromo,
  getCategoryPromoDetail,
  createSeedsPromo
}