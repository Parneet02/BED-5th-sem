let p = new Promise((resolve,reject)=>{    //one promise //asynchronous
    let age=18;
    if(age>=18) return resolve("you are eligible to vote")
        reject("you are not eligible to vote")
})

p.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

console.log("hii")
console.log("ok")
function sum(a,b){
    console.log(a+b)
}
sum(2,3)
console.log("end")