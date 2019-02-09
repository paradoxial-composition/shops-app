'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let ShopSchema = new Schema({
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
