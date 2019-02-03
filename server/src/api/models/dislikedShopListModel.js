'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var DislikedShopSchema = new Schema({
  shopId: {
    type: mongoose.ObjectId
  },
  userId: {
    type: String
  }
},
{ collection: 'DislikedShops' })

module.exports = mongoose.model('DislikedShops', DislikedShopSchema)
