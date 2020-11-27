let express = require('express');
let router = express.Router();
let userController = require('../controller/userController')
let schemaValidation = require('../middleware/joiSchemavalidation');
let userSchema = require('../apimodelSchema/userSchema')


router.post('/signup', 
schemaValidation.validateBody(userSchema.signUp)
,userController.signup )


router.post('/login',
schemaValidation.validateBody(userSchema.login), 
userController.login)









module.exports = router;