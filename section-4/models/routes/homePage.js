const homeController=require("../controllers/home")
const express=require("express")
const route=express.Router()



route.get("/",(homeController))


module.exports=route