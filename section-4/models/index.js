const express = require('express')
const path = require("path")
const http = require("http")
const app = express()
const port = 3000
const server = http.createServer(app)
const homePage=require("./routes/homePage")
// const errorPage=require("./routes/error")
const productPage=require("./routes/product")
app.set("view engine","pug")
app.set("views","views")


app.use(homePage)
app.use(productPage)
// app.use(errorPage)
app.use("/",(req,res,next)=>{
    res.status(404).render("error")
})







server.listen(port, () => {
    try {
        console.log("server is on")
    }
    catch {
        console.error("error in server")

    }
})





