'use strict'

module.exports = function (app) {
  var shopList = require('../controllers/shopListController')

  app.route('/shops')
    .get(shopList.list_all_shops)
     // .post(shopList.create_a_shop);

  app.route('/nearby')
    .get(shopList.nearby_shop)

  app.route('shops/:shopId')
    .get(shopList.read_a_shop)

  
}
