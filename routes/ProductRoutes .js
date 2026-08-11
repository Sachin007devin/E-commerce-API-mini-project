const express = require('express')
const { fetchAllProducts, fetchProductWithId, addNewProduct } = require('../controller/productController')

const router = express.Router()

router.get('/',fetchAllProducts)

router.get('/:id',fetchProductWithId)

router.post('/',addNewProduct)

module.exports = router