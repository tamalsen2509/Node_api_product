let constant = require('../constants/messages')
let productService = require('../services/productService')


module.exports.createProduct = async (req,res) => {
    let response = {...constant.defaultServerResponse}

    try {
        let responsefromService = await productService.createProduct(req.body);
        response.status = 200;
        response.message = constant.productMessage.PRODUCT_CREATED;
        response.body = responsefromService;
    
    } catch (error) {
        console.log('Something went wrong in productController:createProduct', error);  
        response.message = error.message;
    }
    
    return res.status(response.status).send(response);
}

module.exports.getAllProduct = async (req,res) => {
    let response = {...constant.defaultServerResponse}

    try {
        let responsefromService = await productService.getAllProduct(req.query);
        response.status = 200;
        response.message = constant.productMessage.PRODUCT_FETCHED;
        response.body = responsefromService;
    
    } catch (error) {
        console.log('Something went wrong in productController:getAllProduct', error);  
        response.message = error.message;
    }
    
    return res.status(response.status).send(response);
}

module.exports.getProductById = async (req,res) => {
    let response = {...constant.defaultServerResponse}

    try {
        let responsefromService = await productService.getProductById(req.params);
        response.status = 200;
        response.message = constant.productMessage.PRODUCT_FETCHED;
        response.body = responsefromService;
    
    } catch (error) {
        console.log('Something went wrong in productController:getProductById', error);  
        response.message = error.message;
    }
    
    return res.status(response.status).send(response);
}

module.exports.updateProduct = async (req,res) => {
    let response = {...constant.defaultServerResponse}

    try {
        let responsefromService = await productService.updateProduct({
            id : req.params.id,
            updateInfo : req.body            
        });
        response.status = 200;
        response.message = constant.productMessage.PRODUCT_UPDATED;
        response.body = responsefromService;
    
    } catch (error) {
        console.log('Something went wrong in productController:updateProduct', error);  
        response.message = error.message;
    }
    
    return res.status(response.status).send(response);
}


module.exports.deleteProduct = async (req,res) => {
    let response = {...constant.defaultServerResponse}

    try {
        let responsefromService = await productService.deleteProduct(req.params);
        response.status = 200;
        response.message = constant.productMessage.PRODUCT_DELETED;
        response.body = responsefromService;
    
    } catch (error) {
        console.log('Something went wrong in productController:deleteProduct', error);  
        response.message = error.message;
    }
    
    return res.status(response.status).send(response);
}



