require('dotenv').config()
const express = require('express')

const app = express()
const db = require('./database/index')
global.db = db
db.sequelize.sync({ alter: true});


app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/user', require('./routes/user'))
app.use('/category', require('./routes/category'))
app.use('/product', require('./routes/product'))

app.listen(process.env.PORT, () =>
    console.log(`run server port ${process.env.PORT}`))