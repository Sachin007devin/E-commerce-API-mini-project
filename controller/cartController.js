const getCartForUser = ((req,res)=>{

    const userId = req.params.userId
    res.send(`<h2>Fetching cart for user with ID: ${userId}</h2>`)
})

const addProductToCart = ((req,res)=>{

    const userId = req.params.userId
    res.send(`<h2>Adding product to cart for user with ID: ${userId}</h2>`)
})

module.exports={
    getCartForUser,
    addProductToCart
}