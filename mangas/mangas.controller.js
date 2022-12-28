// This file is used to map API calls (Presentation Layer) with the Business-Logic layer

const router = require("express").Router();
const mangaService = require("./mangas.service");
const passport = require("passport");
require("../auth/jwt.strategy");

router.get("/", mangaService.getAllMangas);

router.get("/:id", mangaService.getManga);

router.post("/", passport.authenticate("jwt"), mangaService.createManga);

router.put("/:id", passport.authenticate("jwt"), mangaService.updateManga);

router.delete("/:id", passport.authenticate("jwt"), mangaService.deleteManga);

module.exports = router;
