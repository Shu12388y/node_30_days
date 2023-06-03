const express=require("express")
const routes=express.Route();
const bodyPaser=require("body-paser")
app.use(bodyPaser.urlencoded({extended:false}))
const user_data=[];
routes.get("/login",(req,res,next)=>{
  res.render("login")
})

routes.post("/user-data",(req,res,next)=>{
 user_data.push({titel:req.body});
  res.redirect("/")
 

})
modules.export=routes;
