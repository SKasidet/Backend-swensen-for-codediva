const express = require('express')
const product = require('../controller/product')
const router = express.Router()





router.post('/create', product.create)
router.get('/getone',  product.getOne)
router.get('/getall',  product.getAll)
// router.put('/update_user', product.update)
// router.delete('/delete_user',  product.delete)


module.exports = router;