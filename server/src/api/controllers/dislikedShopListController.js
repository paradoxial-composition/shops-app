'use strict'

let mongoose = require('mongoose')
let DislikedShops = mongoose.model('DislikedShops')
let shops = mongoose.model('Shops')

let axios = require('axios')

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
  let newshop = new DislikedShops(req.body)
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
