const  express = require('express')
const port = 3000
const http= require("http")
const app = express()
const server=http.createServer(app);
const homeRoute=require("./routes/home")
const productRoute=require("./routes/product")
const path=require("path")

app.use(homeRoute)
app.use(productRoute)
app.use("/",(req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"))
})
server.listen(port, () => console.log(`Example app listening on port ${port}!`))