const express =require('express');
const bisinessRoutes=express.Router();

let Business=require('./business.model');

//data store

businessRoutes.route('/add').post(function(re,res){
    let business=new Business(req.body);
    business.save()
        .then(business=>{
            res.status(200),json({'business':'bisiness is added successfuly'});
        })
        .catch(err=>{
            res.status(400).send("unable to save to database");
        });
});

//get data

