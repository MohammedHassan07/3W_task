const express = require('express')
const { createUser, loginUser, uploadData } = require('../controllers/user.controller')
const imageUpload = require('../middlewares/uploadImages')
const verify_jwt_token = require('../middlewares/verifyToken')

const adminRoute = express.Router()

adminRoute.post('/create-profile', createUser)

adminRoute.post('/login', loginUser)

adminRoute.post('/upload-data', imageUpload.array('images'), verify_jwt_token, uploadData )

module.exports = adminRoute