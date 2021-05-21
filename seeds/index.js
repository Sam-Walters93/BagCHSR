const seedUsers = require('./user-seeds');
const seedGigs = require('./gig-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('DATABASE SYNCED');
    
    await seedUsers();
    console.log('USERS SEEDED');
    
    await seedGigs();
    console.log('GIGS SEEDED');
    
    process.exit(0);
};

seedAll();