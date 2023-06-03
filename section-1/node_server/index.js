const http=require('http');  //import the modules 
const fs= require('fs')       //import the file system modules
const port= 3000;  //initialise the port 
//create a http server using the function createServer() which will create a node server and it take a call back function that is (req.res). It stand for request and respone    
const server=http.createServer((req,res)=>{
  console.log(req);
})

//we are listening the server in port that is initialise
server.listen(port)

