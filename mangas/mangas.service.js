// This file holds the Business-Logic layer, interacting with Data Layer
const mangaModel = require('./mangas.model')

function getAllMangas(req , res) {
    mangaModel.find({})
    .then(result => res.status(200).json({ result }))
	.catch(error => res.status(500).json({msg: error}))
}

function createManga (req, res) {
    mangaModel.create(req.body)
	.then(result => res.status(200).json({ result }))
	//.catch((error) => res.status(500).json({msg:  error }))
}

module.exports = {
    getAllMangas,
    createManga
}