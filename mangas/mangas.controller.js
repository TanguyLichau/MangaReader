// This file is used to map API calls (Presentation Layer) with the Business-Logic layer

const router = require('express').Router()
const mangaService = require('./mangas.service')

router.get('/', mangaService.getAllMangas)

router.get('/:id', mangaService.getManga)

router.post('/', mangaService.createManga)

router.put('/:id', mangaService.updateManga)

router.delete('/:id', mangaService.deleteManga)

module.exports = router;