'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let PrefferedShopSchema = new Schema({
  shopId: {
    type: mongoose.ObjectId
  },
  userId: {
    type: String
  }
},
{ collection: 'PrefferedShops' })

PrefferedShopSchema.index({ userId: 1, shopId: 1 }, { unique: true })
module.exports = mongoose.model('PrefferedShops', PrefferedShopSchema)
