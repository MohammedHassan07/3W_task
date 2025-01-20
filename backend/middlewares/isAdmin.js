const userModel = require('../models/user.model')

module.exports = async function isAdmin(req, res, next) {
    try {

        const userId = req.id
        const user = await userModel.findById({ _id: userId })

        // console.log('isAdmin', user)
        if (!user) {
            return res.status(404).json({
                "status": 404,
                "error": "Not Found",
                "message": "The requested data was not found."
            })
        }

        if (!user.isAdmin) {
            return res.status(402).json({
                "status": 401,
                "error": "Unauthorized",
                "message": "You are not and admin"
            })
        }

        req.id = userId
        next()
    } catch (error) {

        console.log('isAdmin --> ', error)
        res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while attempting to save the data. Please try again later."
        })
    }
}