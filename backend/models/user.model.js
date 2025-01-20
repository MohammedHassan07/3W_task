const { model, Schema } = require('mongoose')

const userSchema = new Schema({

    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false }

}, { timestamps: true })

const userModel = model('user', userSchema)

module.exports = userModel 