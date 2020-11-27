let mongoose = require('mongoose');
require('dotenv').config();


module.exports  = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true,useUnifiedTopology: true});    
        console.log('Connected to Database')
    } catch (error) {
        console.log('DB connection Error: ', error);
        throw new Error (error);
    }    
}