const { fetchProducts, fetchProductById, addProductToList } = require("../services/productServices")
const path = require('path')

const getAllProducts = (req,res)=>{
//    const response = fetchProducts()
    // res.send(`<h2>${response}</h2>`)
    res.sendFile(path.join(__dirname,'..','views','product.html'))
}

const getProductById = (req,res)=>{

const productId = req.params.id
const product = fetchProductById(productId)

 res.send(product)

}

const addProduct = (req,res)=>{
//     const addProductResponse = addProductToList()
//  res.send(addProductResponse)

const data = req.body
console.log(data)
res.json(data.product)


}

module.exports={
    getAllProducts,
    getProductById,
    addProduct
}