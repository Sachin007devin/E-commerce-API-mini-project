const express = require('express')
const app = express()
const userRouter = require('./routes/user')
const productRouter = require('./routes/Product ')
const cartRouter = require('./routes/Cart ')

  app.use('/users',userRouter)
  app.use('/products',productRouter)
  app.use('/cart',cartRouter)

app.listen(7777,()=>{
    console.log('server running on port http://Localhost:7777')
})