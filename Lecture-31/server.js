const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080 });

// wss.on("connection",function(socket){
//     console.log("a new user connected")
//     socket.send("Welcome!!!")
//     setInterval(()=>{
//         socket.send("Reliance stock price is"+" "+ Math.random())
//     },1000)
// })

// wss.on("connection",function(socket){
//     console.log("a new user connected")
//     socket.send("Welcome!!!")
//     socket.on("message",function(message){
//         console.log(message.toString())
//         if(message.toString()=="ping"){
//             socket.send("pong")
//         }else{
//             socket.send("you have not send ping msg")
//         }
//     })
// })

//broadcasting
let allsockets=[]
wss.on("connection",function(socket){
    console.log("user connected")
    allsockets.push(socket)
    //console.log(allsockets)
    socket.on("message",function(message){
        allsockets.forEach((s)=>{
            s.send(message.toString())
        })
    })
})

