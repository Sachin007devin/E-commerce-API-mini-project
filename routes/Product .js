const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.send('<h2>Fetching all products</h2>')
    
})

router.get('/:id',(req,res)=>{

const productId = req.params.id

 res.send(`<h2>Fetching product with ID: ${productId}/h2>`)

})

router.post('/',(req,res)=>{
 res.send('<h2>Adding a new product/h2>')
})

module.exports = router