const express=require("express")
const app=express()
const Product=require("../models/product")
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))

const product=(req,res,next)=>{
    const product=Product.fetchdata()
    
    
    res.render("product",{prods:product})
    
}


const product_post=(req,res,next)=>{
    const product=new Product(req.body)
    product.save()
    console.log(product)
    
    res.redirect('/')
}

exports.product=product
exports.product_post=product_post