const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const gigRoutes = require('./gig-routes');

router.use('/users', userRoutes);
router.use('/gigs', gigRoutes);

module.exports = router;