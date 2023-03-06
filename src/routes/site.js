const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteControllers')

// siteController.shopping
router.get('/shopping-cart/', siteController.shopping)

// siteController.cart
router.get('/add-to-cart/:id', siteController.cart)

// siteController.index
router.get('/', siteController.index)

module.exports = router;