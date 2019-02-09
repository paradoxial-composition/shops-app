'use strict'

let mongoose = require('mongoose')
let PreffShops = mongoose.model('PrefferedShops')
let shops = mongoose.model('Shops')

let axios = require('axios')

exports.list_all_preffered_shops = function (req, res) {
  PreffShops.find({}, function (err, shop) {
    if (err) {
      res.send(err)
    } else {
      res.json(shop)
    }
  })
}

exports.list_user_preffered_shops = function (req, res) { // this function drove me crazy but i freaking over came it !!!!!!!!!!!!!!!!!!!!!
  // let userShopList = []
  PreffShops.find({ userId: req.params.userId }, function (err, shop) { // we look for all the shopIds that this user has liked
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

exports.create_a_preffered_shop = function (req, res) {
  let newshop = new PreffShops(req.body)
  newshop.save(function (err, shop) {
    if (err) {
      res.send(err)
    } else {
      res.status(200)
      res.json(shop)
    }
  })
}

exports.delete_a_preffered_shop = function (req, res) {
  PreffShops.remove({ _id: req.params._id }, function (err, shop) {
    if (err) {
      res.send(err)
    } else {
      res.status(200)
      res.json(shop)
    }
  })
}

exports.delete_user_preffered_shop = function (req, res) {
  PreffShops.findOneAndRemove({ $and: [ { userId: req.params.userId }, { shopId: mongoose.Types.ObjectId(req.params.shopId) } ] }, function (err, shop) {
    if (err) {
      res.send(err)
    } else {
      res.status(200)
      res.json(shop)
    }
  })
}

exports.delete_all_preffered_shop = function (req, res) {
  PreffShops.findAndRemove({ userId: req.params.userId }, function (err, shop) {
    if (err) {
      res.send(err)
    } else {
      res.status(200)
      res.json(shop)
    }
  })
}

exports.read_a_preffered_shop = function (req, res) {
  PreffShops.findById(req.params._id, function (err, shop) {
    if (err) {
      res.send(err)
    } else {
      res.status(200)
      res.json(shop)
    }
  })
}
