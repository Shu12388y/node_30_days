const express=require("express")
const routers=express.Router()
const product_data=require("./product")


//creating home route

routers.get("/",(req,res,next)=>{
    const products=product_data.data
    res.render("home",{prods:products,docTitle:"Home"})
    
})

module.exports=routers

