const express = require('express')

const ctrl = require('../controllers/memController')

const router = express.Router()

router.get('/getPosts', ctrl.getPosts)
router.post('/createPosts', ctrl.createPosts)

module.exports = router