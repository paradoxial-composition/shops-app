'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ShopSchema = new Schema({
  _id: {
    type: String
  },
  picture: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  city: {
    type: String
  }
},
{ collection : 'Shops' })

module.exports = mongoose.model('Shops', ShopSchema)
