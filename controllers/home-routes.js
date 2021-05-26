const router = require('express').Router();
const sequelize = require('../config/connection');
const { Gig, User } = require('../models');





router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});



router.get('/', (req, res) => {
    Gig.findAll({
      attributes: [
        'id',
        'name',
        'description',
        'date'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
    .then(dbGigData => {
    const gigs = dbGigData.map(gig => gig.get({ plain: true }));

    res.render('homepage', {
        gigs,
        loggedIn: req.session.loggedIn
    });
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});


router.get('/gig/:id', (req, res) => {
    Gig.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'name',
        'description',
        'date'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbGigData => {
        if (!dbGigData) {
          res.status(404).json({ message: 'No gig found with this id' });
          return;
        }
  
        const gig = dbGigData.get({ plain: true });
  
        res.render('single-gig', {
          gig,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;