const fetchProducts = ()=>{
    return 'Fetching all products'
}

const fetchProductById = (id)=>{
return `<h2>Fetching product with ID: ${id}/h2>`
}

const addProductToList = ()=>{
    return '<h2>Adding a new product/h2>'
}

module.exports = {
    fetchProducts,
    fetchProductById,
    addProductToList
}