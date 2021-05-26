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

router.get('/:id', (req, res) => {
    Gig.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'title', 'description' ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No gig found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});


router.post('/', (req, res) => {
  Gig.create({
    name: req.body.name,
    date: req.body.date,
    description: req.body.description,
    location_name: req.body.location_name,
    location_address: req.body.location_address,
    pay: req.body.pay,
    user_id: req.session.user_id
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
  console.log(err);
  res.status(500).json(err);
  });
});

router.put('/:id', withAuth, (req, res) => {
  Gig.update(
    {
     //need to fill with data
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(dbPostData => {
  if (!dbPostData) {
      res.status(404).json({ message: 'No gig found with this id' });
      return;
  }
  res.json(dbPostData);
  })
  .catch(err => {
  console.log(err);
  res.status(500).json(err);
  });
});

router.delete('/:id', withAuth, (req, res) => {
  Gig.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbPostData => {
  if (!dbPostData) {
      res.status(404).json({ message: 'No gig found with this id' });
      return;
  }
  res.json(dbPostData);
  })
  .catch(err => {
  console.log(err);
  res.status(500).json(err);
  });
});

module.exports = router;