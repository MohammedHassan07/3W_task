const { model, Schema } = require('mongoose')

const userPostSchema = new Schema({

    userId: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    socialMediaHandle: { type: String, required: true },
    images: []

}, { timestamps: true })

const postModel = model('post', userPostSchema)

module.exports = postModel 