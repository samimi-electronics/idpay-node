const router = require('express').Router();

const apiRoutes = require('./api.routes');
const publicRoutes = require('./public.routes');

router.use('/api', apiRoutes);
router.use('/', publicRoutes);

module.exports = router;