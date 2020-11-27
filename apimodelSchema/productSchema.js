let Joi = require('@hapi/joi');

module.exports.createProduct= Joi.object().keys({
    name: Joi.string().required(),
    price : Joi.number().required(),
    brand : Joi.string().required()
})

module.exports.getAllProductSchema = Joi.object().keys({
    skip : Joi.string(),
    limit : Joi.string()
})

module.exports.updateProductSchema = Joi.object().keys({
    name: Joi.string(),
    price : Joi.number(),
    brand : Joi.string()
})
