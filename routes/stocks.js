const express=require("express");
const Stocks=require("../models/stock");
const router=express.Router();

router.get("/",async(req,res)=>{
    try {
        const stocks= await Stocks.find().sort({"name":"1"});
        res.status(200).send(stocks);
    } catch (error) {
        res.status(404).send(error);
    }
})
   

router.post("/",async (req,res)=>{
    try {
        let stocks= new Stocks({
            name:req.body.name,
            numberOfStock:req.body.numberOfStock,
            transactionType:req.body.transactionType,
            pricePerUnit:req.body.pricePerUnit,
            transactionDate:req.body.transactionDate
        })
        stocks.save() ; 
        res.status(201).send(stocks) ;
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports=router;