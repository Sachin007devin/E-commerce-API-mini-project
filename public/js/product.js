const handleFormSubmit =(e) =>{
    e.preventDefault()
    const productValue = e.target.productName.value
    console.log('submit func called' , 'prduct value is =>',productValue)
    const obj = {
        product:productValue
    }
    axios.post('http://localhost:7777/api/products' ,obj ).then((res)=>{
        console.log(res.data)
    })
}