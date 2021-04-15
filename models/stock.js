const mongoose=require('mongoose');

const stockSchema=mongoose.Schema({
    name:String,
    numberOfStock:Number,
    transactionType:String,
    pricePerUnit:Number,
    transactionDate:Date,
})

module.exports =mongoose.model('Stocks',stockSchema )