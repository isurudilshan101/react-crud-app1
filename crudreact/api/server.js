const express =require('express');
const app=express();
const bodyParser=require('body-parser');
const PORT=4001;
const cors=require('cors');

const mongoose=require('mongoose');
const config=require('./DB');
const businessRoute=require('./business.route');

mongoose.Promise=global.Promise;

mongoose.connect(config.DB,{useNewUrlParser:true}).then(
    ()=>{
        console.log('Database is Connected')
    },
    err=>{
        console.log('Cannot connect to the database' + err)
    }
);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/business',businessRoute);

//const port=process.env.PORT||4001;
app.listen(PORT,function(){
    console.log(`Server is running ${PORT}` );
});
 

