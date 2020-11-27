let mongoose = require('mongoose');


let personSchema = new mongoose.Schema({
    name : { type : String , required : true},
    brand : { type : String, required : true},
    price : { type : Number , required : true}
},
{ 
    timestamps : true,
    toObject : { 
        transform : function (doc,ret, options) {
            ret.id = ret._id;
            delete  ret.__v;
            delete ret._id;
            return ret;
        }
    }
})


module.exports = mongoose.model('Product' ,personSchema)