const { sendErrorResponse, sendResponse } = require("../utils/response")

const getCartForUser = ((req, res) => {

    try {
        
        const userId = req.params.userId
        if (userId > 10) {
            let error = new Error('user not found')
            error.statusCode = 404
            throw error
        }

        return sendResponse(res, `Fetching cart for user with ID: ${userId}`, 200)
    } 
    catch (error) {
        return sendErrorResponse(res, error)
    }

})

const addProductToCart = ((req, res) => {

    try {

        const userId = req.params.userId
        if (userId > 10) {
            let error = new Error('Failed to add to cart.User not found!')
            error.statusCode = 404
            throw error
        }

        return sendResponse(res, `Adding product to cart for user with ID: ${userId}`, 200)
    } 
    catch (error) {
        return sendErrorResponse(res, error)
    }
})

module.exports = {
    getCartForUser,
    addProductToCart
}