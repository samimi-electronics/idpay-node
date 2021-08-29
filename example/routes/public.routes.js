const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('index');
});

router.get('/payment', async (req, res) => {
    res.render('payment', {
        title: 'Create payment'
    });
});

module.exports = router;