const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    //console.log(req)
    // res.send("hello world") //text
    // res.send("<h1>hello world</h1>") //html
    res.json({
        name: "Parneet",
        address: "Jagadhri",
        isLogin: true
    })
})

//path param/variable!
//1.params
app.get("/users/:id",(req,res)=>{
    console.log(req.params.id)
    let id=req.params.id
    res.send(id)
})

//2.Query Parameters
app.get("/blogs/",(req,res)=>{
    console.log(req.query.title)
    console.log(req.query.desc)
    res.send("got it")
})
app.listen(2412,()=>{
    console.log("Server started");
})

// app.get("/users",(req,res)=>{
//     res.json({
//         name: "Parneet",
//         address: "Jagadhri",
//         isLogin: true,
//         phonenumber: "7015977109"
//     })
// })
