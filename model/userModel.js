let mongoose = require('mongoose');


let userSchema = new mongoose.Schema({
    password : { type : String, required : true, trim : true },
    email : { type : String , required : true , trim : true}
},
{ 
    timestamps : true,
    toObject : { 
        transform : function (doc,ret, options) {
            ret.id = ret._id;
            delete  ret.__v;
            delete ret.password;
            delete ret._id;
            return ret;
        }
    }
})


module.exports = mongoose.model('User' ,userSchema)