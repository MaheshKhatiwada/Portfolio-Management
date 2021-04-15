const mongoose=require('mongoose');
const Joi=require("joi")

const stockNameSchema=mongoose.Schema({
    name:{
        type:String,
        minlength: 5,
        maxlength: 50,
        required:true,
    },
    currentPerUnitPrice:{
        type:Number,
        required:true,
    }
    
})

module.exports =mongoose.model('StockName',stockNameSchema );

