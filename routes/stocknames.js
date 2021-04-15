const express=require("express");
const StockName=require("../models/stockname");
const router=express.Router();

router.get("/",async(req,res)=>{
    try {
        const name= await StockName.find().sort({"name":"1"})
        res.status(200).send(name);
    } catch (error) {
        res.status(404).send(error);
    }
})

router.post("/",async(req,res)=>{
    try {
        let newName= new StockName({
            name:req.body.name,
            currentPerUnitPrice:req.body.currentPerUnitPrice
        })
        newName.save(); 
        res.status(201).send(newName);
    } catch (error) {
        res.status(404).send(error);
    }
})

module.exports=router;