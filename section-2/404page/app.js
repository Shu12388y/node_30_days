const express=require("express")
const http=require("http")
const homeRoute=require("./routes/home")
const adminRoute=require("./routes/admin")
const bodyParser=require("body-parser")
const port=3000;
const app=express()
const server=http.createServer(app)

app.use(homeRoute)
app.use(adminRoute)

app.use("/",(req,res,next)=>{
    res.status(404).send("<h1>404 Error</h1>")
})

server.listen(port,()=>{
    console.log("server is on")
})