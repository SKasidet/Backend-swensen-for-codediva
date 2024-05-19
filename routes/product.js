const express = require('express')
const product = require('../controller/product')
const router = express.Router()


router.get('/', product.indexpage)
router.get('/create', product.createpage)
router.get('/edit/:id', product.editpage)


router.post('/create', product.create)
router.get('/getone',  product.getOne)
router.get('/getall',  product.getAll)
router.put('/edit', product.update)
router.post('/delete/:id',  product.delete)


module.exports = router;