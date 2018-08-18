const Sequelize = require('sequelize')
const db = require('../db')

const Card = db.define('card', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    rarity: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    },
    creationTime:{
        type: Sequelize.DATE,
        allowNull: false
    },
    acquisitionTime: {
        type: Sequelize.DATE,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6r6ueYtPQTgPKIqXbppfIDMaj7KhDDsuHO3_rlnpL-FgSAka'
    }
})

module.exports = Card
