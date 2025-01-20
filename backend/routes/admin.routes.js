const express = require('express')
const { createUser, loginUser, uploadData } = require('../controllers/user.controller')
const imageUpload = require('../middlewares/uploadImages')
const verify_jwt_token = require('../middlewares/verifyToken')
const { adminLogin, getAllUsers } = require('../controllers/admin.controller')
const isAdmin  = require('../middlewares/isAdmin')

const adminRoute = express.Router()

adminRoute.post('/login', adminLogin)

adminRoute.get('/get-users', verify_jwt_token, isAdmin, getAllUsers)

module.exports = adminRoute