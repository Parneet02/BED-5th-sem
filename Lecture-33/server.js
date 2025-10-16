const express=require("express");
const app=express();
const { createClient } = require("redis");
const client =createClient()
async function connect(){
    await client.connect()

    client.on("error", function(err) {
        console.log( err)
    })
}
// connect()
// .then(()=>{
//     app.listen(2412,()=>{
//     console.log("server started");
// })
// })

// async function cachedData(){
//     await client.connect()
//     await client.set("users:100",JSON.stringify([{
//         name:"Parneet",
//         age:"20"
//     }]))
// }
// cachedData()
// .then(()=>{
//     console.log("Data Cached successfully.")
// })

async function readUser(){
    await client.connect()
    let user=await client.get("users:100")
    return user;
}
readUser()
.then((data)=>{
    console.log(JSON.parse(data))
})

