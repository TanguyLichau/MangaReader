// This file holds the Business-Logic layer, interacting with Data Layer
const mangaModel = require("./mangas.model");

function getAllMangas(req, res) {
  mangaModel
    .find({})
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
}

function getAllMangasByCreatorName(req, res) {
  mangaModel
    .find({ creatorName: req.params.name })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
}

function getManga(req, res) {
  mangaModel
    .find({ name: { $regex: req.params.id } })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
}
function createManga(req, res) {
  mangaModel
    .create(req.body)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
}

function updateManga(req, res) {
  mangaModel
    .findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: error }));
}

function deleteManga(req, res) {
  mangaModel
    .findOneAndDelete({ _id: req.params.id })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: error }));
}
module.exports = {
  getAllMangas,
  getAllMangasByCreatorName,
  getManga,
  createManga,
  updateManga,
  deleteManga,
};
