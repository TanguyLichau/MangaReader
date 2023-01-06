const mongoose = require("mongoose");

const mangaSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  lastChapterRead: { type: Number, required: true },
  coverUrl: { type: String },
});

const Manga = mongoose.model("mangas", mangaSchema);

module.exports = Manga;
