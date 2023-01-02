const { urlencoded } = require('express')
const express = require('express')
const db = require('./models')
const userRoute = require('./routes/users')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = process.env.PORT || 9002

app.use('/',userRoute)
// app.use('/edit',userRoute)

//server listen
app.listen(PORT,(err, req)=>{
    db.sequelize.sync().then(()=>{
        console.log()
    })
    console.log(`Server Running on the ${PORT}`)
})
