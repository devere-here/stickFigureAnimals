const User = require('./user'),
  Card = require('./card'),
  Post = require('./post')

User.belongsToMany(User, {through: 'friendship'})
Card.belondsTo(User)
User.hasMany(Card)
Post.belondsTo(User)
User.hasMany(Post)


module.exports = {
  User,
  Card
}
