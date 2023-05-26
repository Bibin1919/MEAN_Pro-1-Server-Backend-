const express= require('express')
const contactController = require('../controller/contactController')
const feedbackController = require('../controller/feedbackController')
const productController = require('../controller/productController')
const shopController = require('../controller/shopController')



const router = new express.Router()

/* api */
router.get('/contacts/all-contacts',contactController.getallcontacts);
router.get('/contacts/all-feedbacks',feedbackController.getallfeedbacks);
router.get('/admin/all-products',productController.getallproducts);
router.get('/admin/all-shops',shopController.getallshops);
router.delete('/product/remove-item/:_id',productController.removefromproduct);
router.delete('/shop/remove-shop/:_id',shopController.removefromshop);


/* export router */
module.exports = router