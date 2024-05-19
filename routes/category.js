const express = require('express')
const category = require('../controller/category')
const router = express.Router()


router.get('/', category.indexpage)
router.get('/create', category.createpage)
router.get('/edit/:id', category.editpage)


router.post('/create', category.create)
router.get('/getone',  category.getOne)
router.get('/getall',  category.getAll)
router.put('/edit', category.update)
router.post('/delete/:id',  category.delete)


module.exports = router;