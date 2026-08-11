const fetchCartWithId = ((req,res)=>{

    const userId = req.params.userId
    res.send(`<h2>Fetching cart for user with ID: ${userId}</h2>`)
})

const addProductToCartWithuserId = ((req,res)=>{

    const userId = req.params.userId
    res.send(`<h2>Adding product to cart for user with ID: ${userId}</h2>`)
})

module.exports={
    fetchCartWithId,
    addProductToCartWithuserId
}