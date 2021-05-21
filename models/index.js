const User = require('./User');
const Gig = require('./Gig');

Gig.belongsTo(User);
User.hasMany(Gig);

module.exports = { User, Gig };

// need to properly assign foreign keys, possibly create a through model for tracking each gig that belongs to a specific user?