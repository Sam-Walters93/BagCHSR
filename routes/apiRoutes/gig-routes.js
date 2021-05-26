const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Gig } = require('../../models');


router.get('/', (req, res) => {
    Gig.findAll({
        order: [['created_at', 'DESC']]
    })
    .then(dbGigData => res.json(dbGigData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});