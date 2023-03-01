const express = require("express")
const app=express()
const cors = require("cors")
const mongoose = require("mongoose")
app.use(express.json())
mongoose.set('strictQuery', true);

const data=require("./mongoose")
app.use("/data",data)

mongoose.connect("mongodb://localhost:27017/abc",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("ready connection ")
})
.catch((err)=>{
    console.log(err)
})

const port =1910
app.listen(port,()=>{
    console.log(`${port}`)
})