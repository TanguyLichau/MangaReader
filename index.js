const express = require('express')
const app = express()
const mangaController = require('./mangas/mangas.controller')
const port = 3000
const mongoose = require('mongoose')
require('dotenv').config()
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use('/manga', mangaController )


async function main() {
    mongoose.set('strictQuery', true)
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to MongoDB")
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
  })
  }
  main()