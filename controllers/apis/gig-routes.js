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
