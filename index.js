const express=require('express');
const mongoose=require('mongoose');
const Cors=require('cors');
const Stocks=require("./models/stock");
const StockName=require("./models/stockname");
const stockNames=require("./routes/stocknames");
const stocks=require("./routes/stocks");
const filter=require("./routes/filters");
var dotenv = require('dotenv');

const app=express();
app.use(Cors());
app.use(express.json());
app.use("/stockname",stockNames);
app.use("/stocks",stocks)
app.use("/filter",filter);

dotenv.config();
const connection_url=process.env.CONNECTION_URI;

mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true, 
}).then(() => console.log("Connected to mongoDB ...."))
.catch((err) => console.error("Error connecting to mongoDB", err));

const port=process.env.PORT ||8000;
app.listen(port,()=>{console.log(`Listening on port ${port}...`)})