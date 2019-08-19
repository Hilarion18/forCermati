const mongoose = require('mongoose')
const Schema = mongoose.Schema

const promoSchema = new Schema({
    title: {
        type: String
    },
    promo_area: {
        type:  String
    },
    promo_period: {
        type: String
    },
    description: {
      type: String
    },
    image: {
        type: String
    },
    image_detail: {
        type: String
    },
    expired: {
        type: Boolean
    },
    category: {
        type: String
    }
}, {
    timestamps : true,
    underscored: true
})

const PromoCategory = mongoose.model('promo_category', promoSchema)

module.exports = PromoCategory