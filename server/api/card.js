const router = require('express').Router()
const { Card } = require('../db/models')

router.get('/:id', async (req, res, next) => {
    const cards = await Card.findAll({
        where: {
            userId: req.params.id
        }
    })
    res.json(cards)
})

router.post('/', async (req, res, next) => {
    const newCard = await Card.create(req.body)
    res.json(newCard)
})

router.put('/transfer', async (req, res, next) => {
    const card = await Card.update({
        userId: req.body.newOwnerId
    },
    {
        where: {
            id: req.body.id,
        }
    })
    res.json(card)
})
