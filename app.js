require('dotenv').config()
const express = require('express')
const { create } = require('express-handlebars');
const app = express()
const db = require('./database/index')
global.db = db
const path = require("path")
// Set up Handlebars view engine
const hbs = create({ extname: '.hbs' });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));



db.sequelize.sync({ alter: true});
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/user', require('./routes/user'))
app.use('/category', require('./routes/category'))
app.use('/product', require('./routes/product'))

app.listen(process.env.PORT, () =>
    console.log(`run server port ${process.env.PORT}`))