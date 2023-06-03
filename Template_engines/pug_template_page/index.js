const express=require("express")
const bodyParser=require("body-parser")
const http=require("http")
const app=express()
const port =3000
const routers=express.Router()

//setup the templating engine
app.use("view engine","pug")
app.use("views","views")

//create a server
const server=http.createServer(app)







//define a port
server.listen(port,()=>{
    console.log("server is on listening to port 3000")
})