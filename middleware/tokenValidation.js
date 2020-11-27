let constant = require('../constants/messages')
let jwt = require('jsonwebtoken');
require('dotenv').config()



module.exports.validateToken = (req,res,next) => {
    let response = { ...constant.defaultServerResponse}
    
    try {
        if(!req.headers.authorization){
            throw new Error(constant.requestValidationMessage.TOKEN_MISSING);
        }    
        
        let token = req.headers.authorization.split('Bearer')[1].trim();
        let decoded =  jwt.verify(token,process.env.SECRET_KEY);
        console.log('Decoded:', decoded );
        return next()
    } catch (error) {
        console.log('Error', error )
        response.messages = error.message;
        response.status=401;
    }

    return res.status(response.status).send(response)
}