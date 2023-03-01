const express = require("express")
const app = express.Router()
const {Xyz} = require("./schema")

app.post("/",async (req,res)=>{
    const xyz = new Xyz({
       name:req.body.name,
       pwd:req.body.pwd,
    })
    const xyzList = await  xyz.save()
    if(!xyzList) 
    {res.status(400).send({"message":"not success"})}
    else
    {res.status(200).send(xyzList)}
})

app.get("/",async (req,res)=>{
    const xyz = await  Xyz.find()
    if(!xyz) throw err
    else
    {res.status(200).send(xyz)}
})

app.get("/:name",async (req,res)=>{
    const xyz = await  Xyz.findById(req.params.name)
    if(!xyz) throw err
    else
    {res.status(200).send(xyz)}
})

app.put("/:id",async (req,res)=>{
    const xyz = await  Xyz.findByIdAndUpdate(req.params.id,
        {
            name:req.body.name,
        },{new:true})
    if(!xyz) throw err
    else
    {res.status(200).send(xyz)}
})

app.delete("/:id",async (req,res)=>{
    const xyz = await  Xyz.findByIdAndRemove(req.params.id)
    if(!xyz) throw err
    else
    {res.status(200).send(xyz)}
})

module.exports= app