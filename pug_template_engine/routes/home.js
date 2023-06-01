const express=require("express")
const path=require("path")
const routes=express.Router()

routes.get("/home",(req,res,next)=>{
    res.render("shop")

})
module.exports=routes