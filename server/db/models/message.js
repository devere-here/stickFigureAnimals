const Sequelize = require('sequelize')
const db = require('../db')

const Message = db.define('message', {
    conversation: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    sender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    receiver: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

export default Message
