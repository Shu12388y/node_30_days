const express=require("express")
const routes=express.Router()
const path=require("path")
const bodyParser=require("body-parser")
const { Module } = require("module")
routes.use(bodyParser.urlencoded({extended:false}))


routes.get("/product",(req,res,next)=>{

    res.sendFile(path.join(__dirname,"../","views","product.html"))


})
routes.post("/product-data",(req,res,next)=>{
    data=req.body;
    console.log(data)
    res.redirect("/")
})
module.exports=routes