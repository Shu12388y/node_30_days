const express=require("express")
const http=require("http")
const bodyParser=require("body-parser")
const port=3000;
const app=express();
const server =http.createServer(app)

app.use(bodyParser.urlencoded({extended:false}))

app.use("/home",(req,res,next)=>{
    res.send(`<form action="/product" method="POST"><input type="text" name="product" ><button type="submit">add the product</button></form>`)
})
app.use("/product",(req,res,next)=>{
    const body=[]
    const data=req.body
    body.push(data)
    console.log(body)
    res.redirect("/home")

})



server.listen(port,()=>{
    console.log("server is on")
})