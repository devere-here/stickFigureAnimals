const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
    forSale: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    price: {
        type: Sequelize.DOUBLE,
        validate: {
            min: 0
        }
    }
})

module.exports = Post
