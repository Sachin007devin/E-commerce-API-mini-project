const express = require('express')

const router = express.Router()

router.get('/:userId',(req,res)=>{

    const userId = req.params.userId
    res.send(`<h2>Fetching cart for user with ID: ${userId}</h2>`)
})

router.post('/:userId',(req,res)=>{

    const userId = req.params.userId
    res.send(`<h2>Adding product to cart for user with ID: ${userId}</h2>`)
})

module.exports = router