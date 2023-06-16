const express=require("express")
const router=express.Router()
const bodyParser=require("body-parser")
router.use(bodyParser.urlencoded({extended:false}))


const data=[];
//let create a product route
router.get("/product",(req,res,next)=>{
    res.render("product")
})

router.post("/product-data",(req,res,next)=>{
  data.push(req.body)
  console.log(data)
  res.redirect("/")
})

exports.data=data;
exports.router=router