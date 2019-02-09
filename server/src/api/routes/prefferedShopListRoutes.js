'use strict'

module.exports = function (app) {
  let prefferedShopList = require('../controllers/prefferedShopListController')

  // Preffered Shops Routes
  app.route('/prefferedshops')
    .get(prefferedShopList.list_all_preffered_shops)
    .post(prefferedShopList.create_a_preffered_shop)

  app.route('/prefferedshops/:userId')
    .get(prefferedShopList.list_user_preffered_shops)

  app.route('/deleteprefferedshops/:userId/:shopId')
    .delete(prefferedShopList.delete_user_preffered_shop)

  // app.route('/nearbyprefferedshops')
  //   .get(prefferedShopList.nearby_preffered_shop)

  // app.route('/prefferedshops/:_id')
  //   .get(prefferedShopList.read_a_preffered_shop)
  //   .delete(prefferedShopList.delete_a_preffered_shop)
}
