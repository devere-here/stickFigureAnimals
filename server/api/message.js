const router = require('express').Router()
const { Message } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
    const message = await Message.findAll({
        where: {
            sender: req.body.sender || req.body.receiver,
            receiver: req.body.sender || req.body.receiver
        }
    })
    res.json(message)
})
