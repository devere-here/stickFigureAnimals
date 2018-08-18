const User = require('./user'),
  Card = require('./card')

User.belongsToMany(User, {through: 'friendship'})
Card.belondsTo(User)
User.hasMany(Card)

module.exports = {
  User,
  Card
}
