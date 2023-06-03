const express=require("express")
const routers=express.Router()


//creating home route

routers.get("/",(req,res,next)=>{
    res.render("home")
})