const express = require('express')
const { createUser, loginUser, uploadData } = require('../controllers/user.controller')
const imageUpload = require('../middlewares/uploadImages')
const verify_jwt_token = require('../middlewares/verifyToken')
const isUnique = require('../middlewares/isUnique')

const userRoute = express.Router()

userRoute.post('/create-profile', isUnique,createUser)

userRoute.post('/login', loginUser)

userRoute.post('/upload-data', imageUpload.array('images'), verify_jwt_token, uploadData )

module.exports = userRoute