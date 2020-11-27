let Product= require('../model/productModel');
let { formatMongoData  , checkObjectId } = require('../helper/dbhelper');
let constants = require('../constants/messages');
let mongoose = require('mongoose');


module.exports.createProduct = async (service)=> {
    try {
        let product = new Product({...service});
        let result = await product.save();       
        return formatMongoData(result);
    } catch (error) {
        console.log('Something went wrong in service : createProduct' , error)
        throw new Error(error);
    }
}

module.exports.getAllProduct = async ({skip = 0 , limit = 10})=> {
    try {
        let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit))
        return  formatMongoData(products) ;
        
    } catch (error) {
        console.log('Something went wrong in service : getAllProduct' , error)
        throw new Error(error);
    }
}

module.exports.getProductById = async ({ id })=> {    
    try {
        checkObjectId(id)
        let product = await Product.findById(id)
        if (!product){
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return  formatMongoData(product) ;
        
    } catch (error) {
        console.log('Something went wrong in service : getProductById' , error)
        throw new Error(error);
    }
}

module.exports.updateProduct = async ({ id , updateInfo })=> {    
    try {
        checkObjectId(id)
        let product = await Product.findByIdAndUpdate(
            {_id : id},
            updateInfo,
            {new : true}
        )
        if (!product){
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return  formatMongoData(product) ;
        
    } catch (error) {
        console.log('Something went wrong in service : updateProduct' , error)
        throw new Error(error);
    }
}


module.exports.deleteProduct = async ({ id })=> {    
    try {
        checkObjectId(id)
        let product = await Product.findByIdAndDelete(id)
        if (!product){
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return  formatMongoData(product) ;
        
    } catch (error) {
        console.log('Something went wrong in service : deleteProduct' , error)
        throw new Error(error);
    }
}