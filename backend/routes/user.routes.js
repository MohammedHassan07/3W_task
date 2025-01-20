const express = require('express')
const { createUser, loginUser } = require('../controllers/user.controller')

const userRoute = express.Router()

userRoute.post('/create-profile', createUser)

userRoute.post('/login', loginUser)

module.exports = userRoute