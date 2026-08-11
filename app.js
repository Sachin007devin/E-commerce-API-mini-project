const express = require('express')
const app = express()
const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/ProductRoutes ')
const cartRouter = require('./routes/CartRoutes ')

app.use(express.static('public'))
app.use(express.json())

  app.use('/users',userRouter)
  app.use('/api/products',productRouter)
  app.use('/cart',cartRouter)

app.listen(7777,()=>{
    console.log('server running on port http://Localhost:7777')
})