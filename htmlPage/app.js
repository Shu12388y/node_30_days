const  express = require('express')
const port = 3000
const http= require("http")
const app = express()
const server=http.createServer(app);
const homeRoute=require("./routes/home")
const productRoute=require("./routes/product")

app.use(homeRoute)
app.use(productRoute)
server.listen(port, () => console.log(`Example app listening on port ${port}!`))