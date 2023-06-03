const http = require("http")
const fs=require("fs");
const port=3000;
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==="/"){
        res.write("<html>");
        res.write("<h1>web route</h1>")
        res.write('<form action="/message" method="POST"><input type="text" name="message"/> <button type="submit">submit</button>  </form>')
        res.write("</html>")
    return res.end();
    }
    if(url==="/message" && method === "POST")
    {

        fs.writeFileSync("message.txt","new things are inserted");
        res.statusCode=302;
        res.setHeader("location","/")
    }
    



})
server.listen(port,()=>{
    console.log("server is on")
});
    