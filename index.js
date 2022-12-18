const express = require('express')
const app = express()
const mangaController = require('./mangas/mangas.controller')
const port = 3000

app.use('/test', mangaController )


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})