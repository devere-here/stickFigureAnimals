const router = require('express').Router()
const { Post } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
    const posts = await Post.findAll()
    res.json(posts)
})

router.get('/:id', async (req, res, next) => {
    const posts = await Post.findAll({
        where: {
            userId: req.body.userId
        }
    })
    res.json(posts)
})

router.post('/', async (req, res, next) => {
    const post = await Post.create(req.body)
    res.json(post)
})

router.delete('/', async (req, res, next) => {
    const post = await Post.destroy({
        where: {
            id: req.body.id
        }
    })
    res.json(post)
})
