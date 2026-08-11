const express = require('express')
const { getCartForUser, addProductToCart } = require('../controller/cartController')

const router = express.Router()

router.get('/:userId',getCartForUser)

router.post('/:userId',addProductToCart)

module.exports = router