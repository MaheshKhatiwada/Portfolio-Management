const express=require("express");
const Stocks=require("../models/stock");
const router=express.Router();

router.get("/",async(req,res)=>{
    try {
        const stocks= await Stocks.aggregate([ 
            {
                $group:{
                    "_id":'$name',
                    numberOfStock:{$push:'$numberOfStock'},
                    pricePerUnit:{$push:'$pricePerUnit'},
                    transactionType:{$push:'$transactionType'}
                }
            }
        ]).sort({_id:1});
            res.status(200).send(stocks)
    } catch (error) {
        res.status(404).send(error)
    }
   
})



module.exports=router;