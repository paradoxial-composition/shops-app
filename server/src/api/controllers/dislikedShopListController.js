'use strict'

var mongoose = require('mongoose')
var DislikedShops = mongoose.model('DislikedShops')
var shops = mongoose.model('Shops')

var axios = require('axios')

exports.list_all_disliked_shops = function (req, res) {
  DislikedShops.find({}, function (err, shop) {
    if (err) {
      res.send(err)
    } else {
      res.json(shop)
    }
  })
}

exports.list_user_disliked_shops = function (req, res) { // this function drove me crazy but i freaking over came it !!!!!!!!!!!!!!!!!!!!!
  // let userShopList = []
  DislikedShops.find({ userId: req.params.userId }, function (err, shop) { // we look for all the shopIds that this user has liked
    if (err) {
      res.send(err)
    } else { // our array shop is a json object array wich contains all the shopId s our user has liked
      let i
      let userShopList = []
      for (i = 0; i < shop.length; i++) { // we extract the shopid s from the json object and gather them into an array
        userShopList.push(shop[i].shopId)
      }
      shops.find({ _id: { $in: userShopList } }, function (err, likedShops) { // we let find do its magic, it will fetch us every shop whom wich id is in the userShopList array
        if (err) {
          res.send(err)
        } else {
          res.json(likedShops) // taddaa we got all the shops our mate has liked !!!
        }
      })
    }
  })
}

exports.create_a_disliked_shop = function (req, res) {
  var newshop = new DislikedShops(req.body)
  newshop.save(function (err, shop) {
    if (err) {
      res.send(err)
    } else {
      res.status(200)
      res.json(shop)
    }
  })
}

exports.delete_a_disliked_shop = function (req, res) {
  DislikedShops.remove({ _id: req.params._id }, function (err, shop) {
    if (err) {
      res.send(err)
    } else {
      res.status(200)
      res.json(shop)
    }
  })
}

exports.delete_user_disliked_shop = function (req, res) {
  DislikedShops.findOneAndRemove({ $and: [ { userId: req.params.userId }, { shopId: mongoose.Types.ObjectId(req.params.shopId) } ] }, function (err, shop) {
    if (err) {
      res.send(err)
    } else {
      res.status(200)
      res.json(shop)
    }
  })
}

exports.delete_all_disliked_shop = function (req, res) {
  DislikedShops.findAndRemove({ userId: req.params.userId }, function (err, shop) {
    if (err) {
      res.send(err)
    } else {
      res.status(200)
      res.json(shop)
    }
  })
}

exports.read_a_disliked_shop = function (req, res) {
  DislikedShops.findById(req.params._id, function (err, shop) {
    if (err) {
      res.send(err)
    } else {
      res.status(200)
      res.json(shop)
    }
  })
}

// exports.nearby_disliked_shop = function (req, res) {
//   axios.get('https://ipapi.co/json') // get the browser's current position
//     .then((response) => {
//       var coord = response.data
//       try {
//         // Shops.createIndexes({ 'location': '2dsphere' })
//         DislikedShops.aggregate([ // look for nearby shops using mongo's distance calculation method geoNear
//           {
//             $geoNear: {
//               near: {
//                 type: 'Point',
//                 coordinates: [parseFloat(coord.longitude), parseFloat(coord.latitude)]
//               },
//               spherical: true,
//               distanceField: 'distance',
//               maxDistance: 10000
//             }
//           }
//         ], function (err, shop) {
//           if (err) {
//             res.send(err)
//           } else {
//             res.status(200)
//             res.json(shop)
//           }
//         })
//       } catch (err) {
//         console.log(err)
//       }
//     })
// }
