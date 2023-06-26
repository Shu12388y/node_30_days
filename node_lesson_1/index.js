import http from "http"
import fs from "fs"
const server=http.createServer((req,res)=>{
    const index=fs.readFileSync("data.json","utf-8")
    // res.setHeader("content","application/json")
    const obj_json=JSON.parse(index)
    const data=obj_json.users[0]

    console.log(obj_json.users[0])
    res.end(JSON.stringify(data))



})

server.listen(8080,()=>{
    console.log("server is on")
})

