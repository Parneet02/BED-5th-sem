const express=require("express")
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const userRoutes=reqiure("./routes/userRoutes")

app.use("/api/users",userRoutes)

app.listen(1111,()=>{
    console.log("Server started")
})

// async function addUser(email,name){
//     //user user =new User("","");
//     //user.save
//     const newUser=await prisma.user.create({
//         data:{
//             email:email,
//             name:name
//         }
//     })
//     return "User added"
// }
// addUser("parneet2412@chitkara.edu.in","Parneet")
// .then((data)=>console.log(data))
// .catch((e)=>console.log(e))

// async function getUser(email){
//     let user=await prisma.user.findUnique({
//         where:{
//             email:email
//         }
//     })
// return user
// }
// getUser("parneet2412@chitkara.edu.in")
// .then((data)=>console.log(data))
// console.log(hi)

// async function addTweet(userId,body){
//     try{
//         let newTweet = await prisma.tweet.create({
//         data:{
//             userId:Number(userId),
//             body:body
//         }
//     })
//     return newTweet
//     }
//     catch(error){
//         throw new Error(error.message)
//     }
// }
// addTweet("2","my second tweet")
// .then((data)=>console.log(data))
// .catch((e)=>console.log(e))

// async function updateTweet(id,userId,updatedBody){
//     let tweet= await prisma.tweet.findFirst({
//         where:{
//             id:Number(id),
//             userId:Number(userId)
//         }
//     })
//     if(!tweet){
//         return "something went wrong"
//     }
//     await prisma.tweet.update({
//         where:{
//             id:Number(id)
//         },
//         data:{
//             body:updatedBody
//         }
//     })
//     return "tweet updated"
// }
// updateTweet("1","1","update my tweet")
// .then((data)=>console.log(data))
// .catch((e)=>console.log(e))

// async function deleteUser(id){
//     await prisma.user.delete({
//         where:{
//             id:Number(id)
//         }
//     })
//     return "User deleted"
// }
// deleteUser("1")
// .then((data)=>console.log(data))
// .catch((e)=>console.log(e))

// async function readTweets(){
//     //select,include
//     //read all tweets
//     let alltweets=await prisma.tweet.findMany({
//         select:{
//             user:{
//                 select:{
//                     name:true
//                 }
//             },
//             body:true,
//             date:true
//         }
//     })
//     return alltweets;
// }
// readTweets()
// .then((data)=>console.log(data))
// .catch((e)=>console.log(e))

 async function readTweets(){
    //select,include
    //read all tweets
    let alltweets=await prisma.tweet.findMany({
        include:{
            user:{
                select:{
                    name:true
                }
            }
        }
    })
    return alltweets;
}
readTweets()
.then((data)=>console.log(data))
.catch((e)=>console.log(e))
