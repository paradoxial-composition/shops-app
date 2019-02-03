'use strict'

var mongoose = require('mongoose')
var Shops = mongoose.model('Shops')
var DislikedShops = mongoose.model('DislikedShops')

var axios = require('axios')

exports.list_all_shops = function (req, res) {
  Shops.find({}, function (err, shop) {
    if (err) {
      res.send(err)
    } else {
      res.status(200)
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
  Shops.findOne({ _id: req.params._id }, function (err, shop) {
    if (err) {
      res.send(err)
    } else {
      res.status(200)
      res.json(shop)
    }
  })
}

exports.nearby_shop = function (req, res) {
  console.log(req.params.uid)
  let radius = req.params.rd
  axios.get('https://ipapi.co/json') // get the browser's current position
    .then((response) => {
      var coord = response.data
      try {
        Shops.aggregate([ // look for nearby shops using mongo's distance calculation method geoNear
          {
            $geoNear: {
              near: {
                type: 'Point',
                coordinates: [parseFloat(coord.longitude), parseFloat(coord.latitude)]
              },
              spherical: true,
              distanceField: 'distance',
              maxDistance: parseInt(radius) || 10000// if radius is null then default distance is 10Km
            }
          }
        ], function (err, shop) {
          if (err) {
            res.send(err)
          } else {
            res.status(200)
            res.json(shop)
          }
        })
      } catch (err) {
        console.log(err)
      }
    })
}

exports.nearby_user_shop = function (req, res) {
  DislikedShops.find({ userId: req.params.id }, function (err, shop) { // we look for all the shopIds that this user has disliked
    if (err) {
      res.send(err)
    } else { // our array shop is a json object array wich contains all the shopId s our user has disliked
      let i
      let userShopList = []
      for (i = 0; i < shop.length; i++) { // we extract the shopid s from the json object and gather them into an array
        userShopList.push(shop[i].shopId)
      }
      let radius = req.params.rd
      axios.get('https://ipapi.co/json') // get the browser's current position
        .then((response) => {
          var coord = response.data
          try {
            Shops.aggregate([ // this will fetch us every shop whom wich id is not in the userShopList array and are nearby the user's position
              {
                $geoNear: {
                  near: {
                    type: 'Point',
                    coordinates: [parseFloat(coord.longitude), parseFloat(coord.latitude)]
                  },
                  spherical: true,
                  distanceField: 'distance',
                  maxDistance: parseInt(radius) || 10000, // if radius is null then default distance is 10Km
                  query: { _id: { $nin: userShopList } }
                }
              }
            ], function (err, shop) {
              if (err) {
                res.send(err)
              } else {
                res.status(200)
                res.json(shop) // taddaa we got all the shops our mate has not disliked !!!
              }
            })
          } catch (err) {
            console.log(err)
          }
        })
    }
  })
}
