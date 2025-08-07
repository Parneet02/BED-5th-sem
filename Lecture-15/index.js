const express=require("express")
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"))

app.post('/addUser',(req,res)=>{
    try{
    const{email,password}=req.body;
    const newUser={email,password};
    console.log(email,password);
    let newuser={
        email,
        password
    }
   // res.send("user added")
   res.json({
    success:true,
    data:newuser,
    message:"user added successfully"
   })
}catch(error){
    res.json({
        success:false,
        error:error 
    })
   }
})

app.listen(2412,()=>{
    console.log("server started")
})