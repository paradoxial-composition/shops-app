'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PrefferedShopSchema = new Schema({
  shopId: {
    type: mongoose.ObjectId
  },
  userId: {
    type: String
  }
},
{ collection: 'PrefferedShops' })

module.exports = mongoose.model('PrefferedShops', PrefferedShopSchema)
