const express = require('express')
const category = require('../controller/category')
const router = express.Router()





router.post('/create', category.create)
router.get('/getone',  category.getOne)
router.get('/getall',  category.getAll)
// router.put('/update_user', category.update)
// router.delete('/delete_user',  category.delete)


module.exports = router;