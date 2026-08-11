const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.send('<h2>Fetching all users</h2>')
    
})

router.get('/:id',(req,res)=>{

const userId = req.params.id

 res.send(`<h2>Fetching user with ID: ${userId}/h2>`)

})

router.post('/',(req,res)=>{
 res.send('<h2>Adding a new user/h2>')
})

module.exports = router