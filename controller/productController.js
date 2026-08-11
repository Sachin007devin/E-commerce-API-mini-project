const getAllProducts = ((req,res)=>{
    res.send('<h2>Fetching all products</h2>')
    
})

const getProductById = ((req,res)=>{

const productId = req.params.id

 res.send(`<h2>Fetching product with ID: ${productId}/h2>`)

})

const addProduct = ((req,res)=>{
 res.send('<h2>Adding a new product/h2>')
})

module.exports={
    getAllProducts,
    getProductById,
    addProduct
}