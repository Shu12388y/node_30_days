const express=require("express")
const route=express.Router()
const bodyParser=require("body-parser")

const get_product=require("../controllers/productController")


route.get("/product",get_product.product)

route.post("/product_data",get_product.product_post)


module.exports=route