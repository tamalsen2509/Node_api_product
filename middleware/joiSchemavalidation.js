let Joi = require('@hapi/joi');
const { schema } = require('../model/productModel');
let constant = require('../constants/messages')



let validateObjectSchema = (data, schema) => {
    let  result = Joi.validate(data,schema)     
    
    if(result.error) {
        let errorDetails = result.error.details.map( value =>{
            return {
                error : value.message,
                path : value.path
            }
        });

        return errorDetails  
    }
    return null
    console.log('Joi validation error: ', result.error.details)
}


module.exports.validateBody = (schema)=>{
    return (req,res,next) =>{
        let response = {...constant.defaultServerResponse}
        let error =  validateObjectSchema(req.body,schema);
        if (error){
            response.body = error;
            response.message = constant.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response)
        }
        return next()
    }

}

module.exports.validateQuery = (schema)=>{
    return (req,res,next) =>{
        let response = {...constant.defaultServerResponse}
        let error =  validateObjectSchema(req.query,schema);
        if (error){
            response.body = error;
            response.message = constant.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response)
        }
        return next()
    }

}