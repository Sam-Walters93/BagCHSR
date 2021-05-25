const { User } = require('../models');

const userData = [
    {
        email: 'example@email.com',
        password: '123456',
        gigs: null
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;