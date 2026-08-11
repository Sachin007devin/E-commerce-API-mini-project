const { fetchProducts, fetchProductById, addProductToList } = require("../services/productServices")
const path = require('path')
const { sendErrorResponse, sendResponse } = require("../utils/response")

const getAllProducts = (req, res) => {
    //    const response = fetchProducts()
    // res.send(`<h2>${response}</h2>`)
    res.sendFile(path.join(__dirname, '..', 'views', 'product.html'))
}

const getProductById = (req, res) => {

    try {
        const productId = req.params.id
        if (productId > 10) {
            let error = new Error('Product not found!')
            error.statusCode = 404
            throw error
        }
        const product = fetchProductById(productId)

        return sendResponse(res, product, 200)
    } catch (error) {
        return sendErrorResponse(res, error)
    }



}

const addProduct = (req, res) => {
    //     const addProductResponse = addProductToList()
    //  res.send(addProductResponse)

    try {

        const data = req.body

        if (!data) {
            let error = new Error('data not sent properly from client')
            error.statusCode = 204
            throw error
        }

        return sendResponse(res, data.product, 201)
    } catch (error) {
        return sendErrorResponse(res, error)
    }



}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
}