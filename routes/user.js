const express = require('express')
const auth = require('../controller/auth')
const router = express.Router()


router.get('/', auth.indexpage)

router.get('/login', auth.loginpage)
router.get('/register', auth.registerpage)

router.post('/login', auth.login)
router.post('/register', auth.create)
router.get('/getuser',  auth.getUser)
router.get('/getalluser',  auth.getAllUser)
// router.put('/update_user', auth.update)
// router.delete('/delete_user',  auth.delete)


module.exports = router;