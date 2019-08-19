const Customer = require('../models/customer')

const getCustomer = async(req, res) => {
  Customer.find()
    .then((response) => {
      res.status(200).json({
        response
      })
    })
    .catch((err) => {
      res.status(400).json({
        err
      })
    })
}

const createCustomer = async(req, res) => {
  Customer.create({
    name: 'Bambang',
    phone_number: '08229981231',
    description: 'DC fanboy',
    image: 'instagram',
    gender: 'Male'
  })
    .then((response) => {
      console.log(`===== response`)
      res.status(200).json({
        response
      })
    })
    .catch((err) => {
      console.log(`====== err`, err)
      res.status(400).json({
        err
      })
    })
}

module.exports = {
  getCustomer, createCustomer
}