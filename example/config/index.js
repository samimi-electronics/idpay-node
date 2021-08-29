const dotenv = require('dotenv').config();
const Joi = require('joi');

const schema = Joi.object({
    server: {
        baseUrl: Joi.string().required(),
        port: Joi.number().required(),
    },
    idpay: {
        apiKey: Joi.string().required(),
        callback: Joi.string().required(),
        sandbox: Joi.boolean().required(),
    }
});

const config = {
    server: {
        baseUrl: process.env.BASE_URL || 'http://localhost',
        port: process.env.PORT || 3000,
    },
    idpay: {
        apiKey: process.env.IDPAY_API_KEY,
        callback: process.env.IDPAY_CALLBACK_URL,
        sandbox: Boolean(process.env.IDPAY_SANDBOX),
    }
};

const configValidationResult = schema.validate(config);

if (configValidationResult.error) {
    throw new Error(`Config validation error => ${configValidationResult.error}`);
}

console.log('[CONFIG] Configuration setup =>', JSON.stringify(config));

module.exports = config;