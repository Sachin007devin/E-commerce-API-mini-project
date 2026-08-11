const express = require('express')
const { fetchCartWithId, addProductToCartWithuserId } = require('../controller/cartController')

const router = express.Router()

router.get('/:userId',fetchCartWithId)

router.post('/:userId',addProductToCartWithuserId)

module.exports = router