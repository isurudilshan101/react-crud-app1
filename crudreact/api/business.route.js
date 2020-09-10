const express =require('express');
const businessRoutes=express.Router();

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
businessRoutes.route('/').get(function(req,res){
    Business.find(function(err,business){
        if(err)
        console.log(err);
        else{res.json(business)};
    });
});

//edit
businessRoutes.route('/edit/:id').get(function(req,res){
    let id=req.params.id;
    Business.findById(function(err,business){
        res.json(business);
    });
});

//update data
businessRoutes.route('/update/:id').post(function(req,res){
    Business.findById(req.params.id,function(err,business){
        if(!business)
        res.status(404).send("data is not found");
        else{
            business.person_name=req.body.person_name;
            business.business_name=req.business_name;
            business.business_nic_number=req.body.business_nic_number;

            business.save().then(business=>{
                res.json('Update Complete');
            })
            .catch(err=>{
                res.state(400).send("unable to update database");
            });
        }
    });
});


//delete data

businessRoutes.route('/dalete/:id').get(function(req,res){
    business.findByIdAndRemove({id:req.params.id},function(err,business){
        if(err)res.json(err);
        else res.json("Successfully removed");
    });
});

module.exports=businessRoutes;