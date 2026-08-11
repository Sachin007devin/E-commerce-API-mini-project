const express = require('express')
const { fetchAllUser, fetchUSerWithId, addUser } = require('../controller/userController')

const router = express.Router()

router.get('/',fetchAllUser)

router.get('/:id',fetchUSerWithId)

router.post('/',addUser)

module.exports = router