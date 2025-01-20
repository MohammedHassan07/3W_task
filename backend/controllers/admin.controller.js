const userModel = require('../models/user.model')
const postModel = require('../models/userPost.model')
const { generate_password, compare_password } = require('../utils/hash')
const { generate_token } = require('../utils/token')

// Login pharma
const adminLogin = async (req, res) => {

    // console.log(req.body)
    try {

        const {
            email,
            password } = req.body

        // console.log('admin-logIn --> ', req.body)

        const userData = await userModel.findOne({ email })
        if (!userData) {

            return res.status(404).json({
                "status": 404,
                "error": "Not Found",
                "message": "The requested data was not found."
            })
        }

        // console.log('login --> ', userData)

        // check password
        const verified = await compare_password(password, userData.password)

        // console.log(verified)

        if (!verified) {

            res.status(402).json({
                "status": 401,
                "error": "Unauthorized",
                "message": "Invalid credentials. Please check your username and password and try again."
            })
            return
        }

        // generate token
        const token = await generate_token(userData._id)
        if (!token) {

            res.status(500).json({
                "status": 500,
                "error": "Internal Server Error",
                "message": "An error occurred while attempting to save the data. Please try again later."
            })
            return
        }
        res.status(200).json({
            "status": 200,
            "message": "Login successful.",
            "data": {
                "email": email,
                "token": token
            }
        })

    } catch (error) {

        console.log('login admin --> ', error)
        res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
    }
}

const getAllUsers = async (req, res) => {
    try {

        // console.log('admin', req.id)

        const userId = req.id

        const users = await postModel.find()

        console.log('get users --> ', users)
        res.end()
    } catch (error) {

        console.log('get users --> ', error)
        res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
    }
}

module.exports = {
    adminLogin,
    getAllUsers
}