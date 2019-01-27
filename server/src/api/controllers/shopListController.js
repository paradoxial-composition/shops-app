'use strict'

var mongoose = require('mongoose')
var Shops = mongoose.model('Shops')
var axios = require('axios')

exports.list_all_shops = function (req, res) {
  Shops.find({}, function (err, shop) {
    if (err) {
      res.send(err)
    } else {
      axios.get("https://ipapi.co/json")
        .then((response) => {
          var res = response.data
          console.log(res)
        })
      res.json(shop)
    }
  })
}

// exports.create_a_shop = function (req, res) {
//   var newshop = new Shop(req.body)
//   newshop.save(function (err, shop) {
//     if (err) {
//       res.send(err)
//     } else {
//       res.json(shop)
//     }
//   })
// }

exports.read_a_shop = function (req, res) {
  Shops.find({}, function (err, shop) {
    if (err) {
      res.send(err)
    } else {
      res.json(shop)
    }
  })
}

exports.nearby_shop = function (req, res) {
  axios.get("https://ipapi.co/json") // get the browser's current position
        .then((response) => {
          var coord = response.data
  Shops.aggregate([ // look for nearby shops using mongo's distance calculation method geoNear
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [parseFloat(coord.longitude), parseFloat(coord.latitude)]
        },
        spherical: true,
        distanceField: "distance",
        maxDistance: 20000
      }
    }
  ], function (err, shop) {
    if (err) {
      res.send(err)
    } else {
      res.json(shop)
    }
  })
  console.log(coord.longitude)
  console.log(coord.latitude)
})
}