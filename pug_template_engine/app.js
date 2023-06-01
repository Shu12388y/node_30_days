const express=require("express")
const path=require("path")
const http=require("http")
const port=3000;
const routes=express.Router()
const app=express()
app.set("view engine","pug");
app.set("views","views");
const homeRoutes=require("./routes/home")
const server =http.createServer(app)

app.use(homeRoutes)



server.listen(port,()=>{
    console.log("server is on in port 3000")
})