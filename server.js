// importing module section 
let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let dotENV = require('dotenv').config(); 
let morgan = require('morgan');
let helmet = require('helmet');
let dbConnection = require('./db/connection')
let port = process.env.PORT || 3000;


// application instantiation 
let app=express();


// db section 

dbConnection()

// request level middleware 
app.use(express.json())
app.use(express.urlencoded({ extended : true}))


// middleware section 
app.use(morgan('dev')); // logger middleware
app.use(helmet()) // security middleware


app.use(cors());
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send({
        status : 500,
        message : err.message,
        body : {}
    })
  })




// Routes or endpoints section 
app.use('/api/v1/product',require('./routes/productRoutes') )
app.use('/api/v1/user',require('./routes/userRoute') )



//defining port to listen the API
app.listen(port, ()=>{
    console.log("API is listening at PORT : " + port  )
})