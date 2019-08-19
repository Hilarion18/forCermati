const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
    name: {
        type: String
    },
    phone_number: {
        type:  String
    },
    description: {
      type: String
    },
    image: {
        type: String
    },
    gender: {
      type: String
    }
}, {
    timestamps : true,
    underscored: true
})

const Customer = mongoose.model('customer', customerSchema)

module.exports = Customer