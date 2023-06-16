const express= require("express")
const routes=express.Router();
const bodyParser=require("body-parser")

routes.use(bodyParser.urlencoded({extended:false}))
routes.get("/product",(req,res,next)=>{
    res.send(`<form action="/product-data" method="POST"><input type="text" method="POST" name="product"><button type="submit"> submit</button></form>`)
})
routes.post("/product-data",(req,res,next)=>{
    const data=req.body;
    console.log(data)

    res.redirect("/")
})

module.exports=routes