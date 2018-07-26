const router = require('express').Router()
const { User } = require('../db/models')
const asyncHandler = require('express-async-handler')
const { isSelf } = require('../permissions')

module.exports = router

router.param('id', asyncHandler(async (req, res, next, id) => {
    const user = await User.findById(id, {
      attributes: ['id', 'email', 'isAdmin']
    })
    if (!user) {
      const err = new Error('NOT FOUND')
      err.status = 401
      next(err)
    } else {
      req.requestedUser = user
      next()
    }
}))

router.get('/', asyncHandler(async (req, res, next) => {
    const users = await User.findAll({
      attributes: ['id', 'email']
    })
    res.json(users)
}))

router.get('/:id', isSelf, (req, res, next) => {
  res.json(req.requestedUser)
})

router.put('/:id', isSelf, asyncHandler(async (req, res, next) => {
    const response = await User.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    })
    res.json(response[1][0])
}))
