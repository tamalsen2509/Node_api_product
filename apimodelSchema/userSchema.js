let Joi = require('@hapi/joi');


module.exports.signUp = Joi.object().keys({
    email : Joi.string().required(),
    password : Joi.string().required()
})

module.exports.login = Joi.object().keys({
    email : Joi.string().required(),
    password : Joi.string().required()
})