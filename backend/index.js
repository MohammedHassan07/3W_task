require('dotenv').config()  
const cors = require('cors')
const express = require('express')
const DB_connection = require('./config/DBConnection')


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

