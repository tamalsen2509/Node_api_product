let constant = require('../constants/messages')
let userService = require('../services/userService')



module.exports.signup = async (req,res) => {
    let response = {...constant.defaultServerResponse}

    try {
        let responsefromService = await userService.signup(req.body);
        response.status = 200;
        response.message = constant.userMessages.SIGNUP_SUCCESS;
        response.body = responsefromService;
    
    } catch (error) {
        console.log('Something went wrong in userController:signup', error);  
        response.message = error.message;
    }
    
    return res.status(response.status).send(response);
}


module.exports.login = async (req,res) => {
    let response = {...constant.defaultServerResponse}

    try {
        let responsefromService = await userService.login(req.body);
        response.status = 200;
        response.message = constant.userMessages.LOGIN_SUCCESS;
        response.body = responsefromService;
    
    } catch (error) {
        console.log('Something went wrong in userController:login', error);  
        response.message = error.message;
    }
    
    return res.status(response.status).send(response);
}