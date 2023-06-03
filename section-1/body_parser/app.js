const http=require("http")
const fs=require("fs");
const port=3000 || process.env;
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==="/"){
        res.write("<h1>welcome to home page</h1>")
        res.write('<form action="/message" method="POST"><input type="text" name="message"/> <button type="submit">submit</button>  </form>')
      return res.end();
    }
    if(url==="/message" && method==="POST")
    {
        const body=[];
        res.on("data",(chunck)=>{
            console.log(chunck)
            body.push(chunck)
        })
        res.on("end",()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split("=")[1];
            fs.writeFileSync("message.txt",message)

        })


    }
})
server.listen(port,()=>{
    console.log("server is on")
})