'use strict'

module.exports = function (app) {
  var prefferedShopList = require('../controllers/prefferedShopListController')

  // Preffered Shops Routes
  app.route('/prefferedshops')
    .post(prefferedShopList.create_a_preffered_shop)

  app.route('/prefferedshops/:userId')
    .get(prefferedShopList.list_user_preffered_shops)

  app.route('/nearbyprefferedshops')
    .get(prefferedShopList.nearby_preffered_shop)

  app.route('/prefferedshops/:_id')
    .get(prefferedShopList.read_a_preffered_shop)
    .delete(prefferedShopList.delete_a_preffered_shop)
}
