const express=require('express')
// const {routes}=require('express/lib/application')

const Detail=require("../model/Detail")
const Slider = require('../model/Slider');
const Service = require('../model/Service');
const async = require('hbs/lib/async');
const Contact = require('../model/Contact');

const routes=express.Router()

routes.get ("/",async(req,res)=>{

const details= await Detail.findOne({"_id":"649bd44b5b9b766a90f1b36e"})
const sliders=await Slider.find()
const services=await Service.find()
    //  console.log(slides)
 
    res.render("index",{
        details:details,
        sliders:sliders,
        services:services
    });
});

routes.get('/gallery',async(req,res)=>{
    const details= await Detail.findOne({"_id":"649bd44b5b9b766a90f1b36e"})
    
    res.render("gallery",{
        details:details,
        
    })
    });

    routes.post("/process-contact-form",async(req,res)=>{
    //    console.log(req.body)
        //  save the data to db  
        try{
          
const data= await Contact.create(req.body)
            console.log(data)
            res.redirect("/")
        }catch(e) 
        {
console.log(e)
             res.redirect("/")
        }
    })
module.exports=routes