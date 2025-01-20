
const userModel = require('../models/user.model')
const postModel = require('../models/userPost.model')
const { generate_password, compare_password } = require('../utils/hash')
const { generate_token } = require('../utils/token')

// Create profile
const createUser = async (req, res) => {
    try {

        const {
            email,
            password
        } = req.body

        // console.log('create-profile -->', req.body)

        // hash password
        const hashPass = await generate_password(password)

        const userData = new userModel({
            email,
            password: hashPass
        })

        const saved_data = await userData.save()
        res.status(201).json({
            "status": 201,
            "message": "User registered successfully.",
            email: email
        })

    } catch (error) {

        console.log('crearte profile --> ', error)
        res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
        return
    }
}

// Login pharma
const loginUser = async (req, res) => {

    console.log(req.body)
    try {

        const {
            email,
            password } = req.body

        // console.log('pharma-logIn --> ', req.body)

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
        console.log(verified)
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

        console.log('login user --> ', error)
        res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
    }
}

// upload data
const uploadData = async (req, res) => {
    try {

        const { socialMediaHandle, name } = req.body

        userId = req.id

        const imagesName = req.files.map(file => file.filename)
        const userPost = new postModel({

            userId,
            name,
            socialMediaHandle,
            images: imagesName
        })

        const saved_data = await userPost.save()
        res.status(201).json({
            "status": 201,
            "message": "Data uploaded successfully.",

        })
    } catch (error) {

        console.log('crearte profile --> ', error)
        res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
        return
    }
}
module.exports = {
    createUser,
    loginUser,
    uploadData
}