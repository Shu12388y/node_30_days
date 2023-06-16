const express=require("express")
const routers=express.Router()
const homeController=require("../controller/home_controller")

routers.get("/",homeController)





module.exports=routers