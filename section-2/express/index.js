const http =require("http")
const express= require("express")
const port = 3000 | process.env
const app=express();
const server=http.createServer(app)
app.use((req,res,next)=>{
    console.log("server request 1")
    next()
})
app.use((req,res,next)=>{
    console.log("server request 2")
    next()
})
app.use((req,res,next)=>{
    res.send("<h1>web server is on</h1>")
    next()
})


server.listen(port,()=>{
    console.log(`server is listening to port ${port}`)
})