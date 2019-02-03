'use strict'

module.exports = function (app) {
  var shopList = require('../controllers/shopListController')

  // Nearby Shops Routes
  app.route('/shops')
    .get(shopList.list_all_shops)
  // .post(shopList.create_a_shop);

  app.route('/shops/:_id')
    .get(shopList.read_a_shop)

  app.route('/nearby')
    .get(shopList.nearby_shop)

  app.route('/nearbyuser/:id')
    .get(shopList.nearby_user_shop)

  app.route('/nearbyuser/:id/:rd')
    .get(shopList.nearby_user_shop)

  app.route('/nearby/radius/:rd')
    .get(shopList.nearby_shop)

  app.route('/nearby/:_id')
    .get(shopList.read_a_shop)
}
