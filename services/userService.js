let User = require('../model/userModel');
let constants = require('../constants/messages');
let bcrypt = require('bcrypt');
let {  formatMongoData  } = require('../helper/dbhelper')
let jwt = require('jsonwebtoken');

module.exports.signup = async ( {email, password}  ) => {
    
    try {
        let user = await User.findOne({email})
        if (user) {
            throw new Error (constants.userMessages.DUPLICATE_EMAIL)
        }
        password = await bcrypt.hash(password,12);

        let newUser = new User({password,email});
        let result = await newUser.save()
        return formatMongoData(result);

    } catch (error) {
        console.log('Something went wrong in service : UserService :signup ' , error)
        throw new Error(error);
    }


}



module.exports.login = async ( {email, password}  ) => {
    

    try {
        let user = await User.findOne({email})
        if (!user) {
            throw new Error (constants.userMessages.USER_NOT_FOUND);
        }        
        let isValid = await bcrypt.compare(password, user.password);
        if (!isValid){
            throw new Error (constants.userMessages.INVALID_PASSWORD);
        }
        let token = jwt.sign({id : user._id}, process.env.SECRET_KEY);
        return {token};


    } catch (error) {
        console.log('Something went wrong in service : UserService: login ' , error)
        throw new Error(error);
    }


}



