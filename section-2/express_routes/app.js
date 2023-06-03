const http =require("http")
const express= require("express")
const app=express();
const port =3000;
app.use("/product",(req,res,next)=>{
    res.send("hello this is product page")
})
app.use("/about",(req,res,next)=>{
    res.send("This is about page")
})

app.use((req,res,next)=>{
    res.send("Home page")
})
app.listen(port,()=>{
    console.log("server is on")
})
