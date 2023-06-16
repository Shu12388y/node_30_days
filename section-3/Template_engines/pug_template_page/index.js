const express=require("express")
const bodyParser=require("body-parser")
const http=require("http")
const app=express()
const port =3000
const homeRoute=require("./routes/home")
const productRoute=require("./routes/product")

//setup the templating engine
app.set("view engine","pug")
app.set("views","views")

//using body parser
app.use(bodyParser.urlencoded({extended:false}))


//home route
app.use(homeRoute)
app.use(productRoute.router)

//create a server
const server=http.createServer(app)







//define a port
server.listen(port,()=>{
    console.log("server is on listening to port 3000")
})