// This file is used to map API calls (Presentation Layer) with the Business-Logic layer

const router = require('express').Router()
const mangasService = require('./mangas.service')

router.get('/', mangasService.getAllMangas)

// router.get('/:id', mangasService.getAllMangas)

router.post('/', mangasService.createManga)

module.exports = router;