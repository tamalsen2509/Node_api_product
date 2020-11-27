module.exports={
    defaultServerResponse : {
        status : 400,
        message : '',
        body : {}
    },
    productMessage : {
        PRODUCT_CREATED : 'Product created succesfully!.' , 
        PRODUCT_FETCHED : 'Product fetched succesfully!.',
        PRODUCT_NOT_FOUND : 'Product not found!.',
        PRODUCT_UPDATED : 'Product updation compleated!.',
        PRODUCT_DELETED : 'Product deleted successfully!.'
    },
    requestValidationMessage : {
        BAD_REQUEST : 'Invalid fields',
        TOKEN_MISSING : 'Token missing!'
    },
    database_messages : {
        INVALID_ID : 'Invalid ID'
    },
    userMessages :{
        SIGNUP_SUCCESS : 'Sign Up succesfully',
        DUPLICATE_EMAIL : 'Email ID already exists!',
        LOGIN_SUCCESS : 'Login Successfull',
        USER_NOT_FOUND : 'User not found!',
        INVALID_PASSWORD : 'Invalid password!' 
    }

}