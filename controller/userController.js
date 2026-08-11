const fetchAllUser = ((req,res)=>{
    res.send('<h2>Fetching all users</h2>')
    
})

const fetchUSerWithId = ((req,res)=>{

const userId = req.params.id

 res.send(`<h2>Fetching user with ID: ${userId}/h2>`)

})

const addUser = ((req,res)=>{
 res.send('<h2>Adding a new user/h2>')
})

module.exports={
    fetchAllUser,
    fetchUSerWithId,
    addUser
}