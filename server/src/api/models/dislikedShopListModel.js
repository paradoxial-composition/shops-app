'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let DislikedShopSchema = new Schema({
  shopId: {
    type: mongoose.ObjectId
  },
  userId: {
    type: String
  }
},
{ collection: 'DislikedShops' })

DislikedShopSchema.index({ userId: 1, shopId: 1 }, { unique: true })
module.exports = mongoose.model('DislikedShops', DislikedShopSchema)
