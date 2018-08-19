const User = require('./user'),
  Card = require('./card'),
  Post = require('./post')

User.belongsToMany(User, {as: 'friend1', through: 'friendship'})
User.belongsToMany(User, {as: 'friend2', through: 'friendship'})
Card.belongsTo(User)
User.hasMany(Card)
Post.belongsTo(User)
User.hasMany(Post)


module.exports = {
  User,
  Card
}
