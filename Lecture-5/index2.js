// let p = new Promise((resolve,reject)=>{
//     resolve("okay")
// })
// //console.log(p)
// p.then((data)=>{
//     console.log(data)
//     console.log("Promise completed")
// })
// .catch((err)=>{
//     console.log(err)
// })

let users=[
    {
        id:1,
        age:16,
        name:"Parneet"
    },
    {
        id:2,
        age:18,
        name:"Bani"
    }
]
function isEligible(id){
    return new Promise((resolve,reject)=>{
        let user=users.filter((user)=> user.id==id)[0];
    console.log(user)
    if(!user) return reject("no user found")
    if(user.age>=18){
        return resolve("eligible for vote")
    }
    else{
        return reject("not eligible")
    }
})
}
isEligible(1).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
console.log("hii")
console.log("bye")