const { sendResponse, sendErrorResponse } = require("../utils/response")

const getAllUsers = ((req, res) => {

    try {
        return sendResponse(res, 'Fetching all users', 200)
    } catch (error) {
        error.statusCode = 500
        return sendErrorResponse(res, error)
    }

})

const getUserById = ((req, res) => {

    try {

        const userId = req.params.id
        if (userId > 10) {
            let error = new Error('user not found')
            error.statusCode = 404
            throw error
        }

        return sendResponse(res, `Fetching user with ID: ${userId}`, 200)
    }
    catch (error) {
        return sendErrorResponse(res, error)
    }


})

const addUser = ((req, res) => {
    try {
        return sendResponse(res, 'Adding a new user', 200)
    } catch (error) {
        error.statusCode = 500
        return sendErrorResponse(res, error)
    }
})

module.exports = {
    getAllUsers,
    getUserById,
    addUser
}