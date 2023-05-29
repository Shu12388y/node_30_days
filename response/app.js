const http=require("http");
const port=3000;
const server =  http.createServer((req,res)=>{
  const url=req.url;
  if(url === "/"){
    res.write("<html>")
    res.write("<head><title>first server</title></head>")
  res.write("<h1>server is on</h1>")
    res.write("</html>")
    
    return res.end()  
  }
})
server.listen();
