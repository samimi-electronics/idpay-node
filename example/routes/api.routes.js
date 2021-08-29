const config = require('../config');
const router = require('express').Router();
const {IDPay} = require('idpay-node');

const idpay = new IDPay(config.idpay.apiKey, config.idpay.sandbox);

router.post('/payment-request', async (req, res) => {
    const requestObj = {
        ...req.body,
        callback: config.idpay.callback
    };
    // console.log(requestObj);
    try {
        const prResponse = await idpay.paymentRequest({
            ...req.body,
            callback: config.idpay.callback
        });
        return res.json(prResponse);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: 500,
            error: err.message
        });
    }
});

module.exports = router;