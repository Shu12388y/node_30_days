const express=require("express")
const route=express.Router()
const bodyParser=require("body-parser")
route.use(bodyParser.urlencoded({extended:false}))
const homeFunction=require("../controller/home")

route.get("/",homeFunction)




module.exports=route