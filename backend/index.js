require('dotenv').config()  
const cors = require('cors')
const express = require('express')
const DB_connection = require('./config/DBConnection')
const userRoute = require('./routes/user.routes')
const adminRoute = require('./routes/admin.routes')


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
  origin: '*'
}))

const port = process.env.PORT 

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
  DB_connection()
})

app.use('/user', userRoute)
app.use('/admin', adminRoute)
