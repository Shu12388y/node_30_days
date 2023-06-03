const express=require("express")
const routes=express.Router();

const user_data=[];
routes.get("/login",(req,res,next)=>{
  res.render("login")
})

routes.post("/user-data",(req,res,next)=>{
 user_data.push({title:req.body});
  res.redirect("/")
 

})
module.exports=routes;
