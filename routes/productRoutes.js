let express = require('express');
let router = express.Router();
let productController = require ('../controller/productController')
let JoiSchemaValidation = require('../middleware/joiSchemavalidation');
let productSchema = require('../apimodelSchema/productSchema');
let tokenValidation = require('../middleware/tokenValidation')

router.post('/',tokenValidation.validateToken ,
JoiSchemaValidation.validateBody(productSchema.createProduct), 
productController.createProduct ) 



router.get('/', tokenValidation.validateToken ,
JoiSchemaValidation.validateQuery(productSchema.getAllProductSchema)
,productController.getAllProduct )


router.get('/:id',tokenValidation.validateToken , productController.getProductById)

router.put('/:id', tokenValidation.validateToken  ,JoiSchemaValidation.validateBody(productSchema.updateProductSchema), productController.updateProduct)

router.delete('/:id',tokenValidation.validateToken  ,
productController.deleteProduct )




module.exports = router;
