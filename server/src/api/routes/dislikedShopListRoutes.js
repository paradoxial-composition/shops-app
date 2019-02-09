'use strict'

module.exports = function (app) {
  let dislikedShopList = require('../controllers/dislikedShopListController')

  // disliked Shops Routes
  app.route('/dislikedshops')
    .get(dislikedShopList.list_all_disliked_shops)
    .post(dislikedShopList.create_a_disliked_shop)

  app.route('/dislikedshops/:userId')
    .get(dislikedShopList.list_user_disliked_shops)

  app.route('/deletedislikedshops/:userId/:shopId')
    .delete(dislikedShopList.delete_user_disliked_shop)
}
