const mongoose = require('mongoose')

module.exports = async function connectDataBase() {

    try {

        const DB_Url = process.env.DB_Url
        const connection = await mongoose.connect(DB_Url)

        if (connection) {
            console.log('Connected...')
        }

    } catch (error) {
        console.log('database --> ', error)
    }
}
