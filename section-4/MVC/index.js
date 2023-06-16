const express=require("express")
const http=require("http")
const app=express()
const port=3000
const server =http.createServer(app)
const homeRoute=require("./routers/home")
app.set("view engine","pug")
app.set("views","views")


app.use(homeRoute)





server.listen(port,()=>{
    console.log("server is working ")
})