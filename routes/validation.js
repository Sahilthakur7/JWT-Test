const Joi = require('@hapi/joi');

const registerValidation = data => {
    const userValidationSchema = {
        name: Joi.string().min(6).required(),
        password: Joi.string().min(6).required(),
        email: Joi.string().min(6).email().required()
    }

    return Joi.validate(data, userValidationSchema);
};

const loginValidation = data => {
    const userLoginSchema = {
        password: Joi.string().min(6).required(),
        email: Joi.string().min(6).email().required()
    }

    return Joi.validate(data, userLoginSchema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
