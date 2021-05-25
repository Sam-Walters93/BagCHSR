const { Gig } = require('../models');

const gigData = [
    {
        user_id: 1,
        name: "Mow Steven's lawn",
        date: new Date(),
        location_name: "Steven's house" ,
        location_address: "123 Address Road, Example TX 55555",
        pay: 25.00,
        description: ''
    }
]

const seedGigs = () => Gig.bulkCreate(gigData);

module.exports = seedGigs;