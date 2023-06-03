// let us understand what is resquest
const http=require("http");
const port=3000;
//we have define three property of request first one is req.url it will give you the url of the user. Second one is the req.method it will tell about the method and last one is the req.header is used to header that is meta data
const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers)
});
server.listen(port);
