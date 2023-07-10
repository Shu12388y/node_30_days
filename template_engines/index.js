const express=require("express");
const http = require("http");
const port= process.env.PORT || 3000;
const app=express();
const server=http.createServer(app)

const homepage=("/",(req,res,next)=>{
  console.log("res")
})
server.listen(port,()=>{
  console.log("server is on")
})
