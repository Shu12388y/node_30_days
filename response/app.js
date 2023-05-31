const http=require("http");
const port=3000;
const server =  http.createServer((req,res)=>{
 res.write("<h1>webpage is on</h1>")
 res.end()
})
server.listen();
