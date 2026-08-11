const { fetchProducts, fetchProductById, addProductToList } = require("../services/productServices")

const getAllProducts = (req,res)=>{
   const response = fetchProducts()
    res.send(`<h2>${response}</h2>`)
}

const getProductById = (req,res)=>{

const productId = req.params.id
const product = fetchProductById(productId)

 res.send(product)

}

const addProduct = (req,res)=>{
    const addProductResponse = addProductToList()
 res.send(addProductResponse)
}

module.exports={
    getAllProducts,
    getProductById,
    addProduct
}