const express = require('express')
const { getAllUsers, getUserById, addUser } = require('../controller/userController')

const router = express.Router()

router.get('/',getAllUsers)

router.get('/:id',getUserById)

router.post('/',addUser)

module.exports = router