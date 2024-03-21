const express = require('express')
const { adminLogin,adminSignUp } = require('../../controllers/admin/adminController')

const router = express.Router()

router.post('/login', adminLogin)

router.post('/signup', adminSignUp)

module.exports = router