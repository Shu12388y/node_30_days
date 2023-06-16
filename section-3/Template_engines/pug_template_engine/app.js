const express=require("express")
const path=require("path")
const http=require("http")
const port=3000;
const routes=express.Router()
const app=express()
app.set("view engine","pug");
app.set("views","views");
const bodyPaser=require("body-parser")
app.use(bodyPaser.urlencoded({extended:false}))
const homeRoutes=require("./routes/home")
const productRoutes=require("./routes/product.js")
const server =http.createServer(app)

app.use(homeRoutes);
app.use(productRoutes);


server.listen(port,()=>{
    console.log("server is on in port 3000")
})
