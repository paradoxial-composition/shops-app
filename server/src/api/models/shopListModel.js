'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ShopSchema = new Schema({
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
  },
  location: {
    type: { type: String },
    coordinates: []
  }
},
{ collection: 'Shops' })

module.exports = mongoose.model('Shops', ShopSchema)
