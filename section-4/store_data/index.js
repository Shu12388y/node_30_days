const express=require("express")
const route=express.Router()
const http=require("http")
const app=express()
const server=http.createServer(app)
const homeRoute=require("./routes/home")

app.set("view engine","pug")
app.set("views","views")
app.use(homeRoute)





server.listen(3000,()=>{
    console.log("server is on")
})