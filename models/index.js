const User = require('./User');
const Gig = require('./Gig');

User.hasMany(Gig, {
    foreignKey: 'user_id'
});

Gig.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = { User, Gig };

