const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
    ethereumId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: false
        }
    },
    emailAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        get() {
            return () => this.getDataValue('password')
          }
    },
    salt: {
        type: Sequelize.STRING,
        get () {
          return () => this.getDataValue('salt')
        }
      },
})

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
    return User.encryptPassword(candidatePwd, this.salt()) === this.password()
}

/**
 * classMethods
 */
User.generateSalt = function () {
    return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function (plainText, salt) {
    return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

const setSaltAndPassword = user => {
    if (user.changed('password')) {
        user.salt = User.generateSalt()
        user.password = User.encryptPassword(user.password(), user.salt())
    }
}

User.beforeBulkCreate(( user ) => user.forEach(setSaltAndPassword))
User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)

module.exports = User
