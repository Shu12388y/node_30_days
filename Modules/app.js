const http = require("http")
const fs = require("fs")
const route=require("./routes")
const port =3000;
const  server =http.createServer(route);
server.listen(port,()=>{
    console.log(`server is running on ${port}`)
})