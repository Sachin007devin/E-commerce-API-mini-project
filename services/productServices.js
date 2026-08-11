const fetchProducts = ()=>{
    return 'Fetching all products'
}

const fetchProductById = (id)=>{
return `Fetching product with ID: ${id}`
}

const addProductToList = ()=>{
    return '<h2>Adding a new product/h2>'
}

module.exports = {
    fetchProducts,
    fetchProductById,
    addProductToList
}