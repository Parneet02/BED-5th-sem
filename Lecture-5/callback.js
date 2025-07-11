let account_balance= 200000000;
let product=[
    {
        name:"samsung",
        amount:70000,
        quantity:10
    },
     {
        name:"Iphone 16",
        amount:10000,
        quantity:1
    }
]
// function buyProduct(product_name,cb){
//  let isproduct =null
//  //implement for loop to find product in an array
//  //find product object from product array who's name is equal to product_name
//  for(let i =0 ; i<products.length;i++){
//     // console.log( products[i].name==product_name);
//     if(products[i].name==product_name){
//         isproduct=products[i];
//     }
//  }
//  if(!isproduct){
//     cb("product is not available",null)
//  }else{
//     cb(null,isproduct.amount);
//     cb(null,isproduct.amount);
//  }
// }
function buyProduct(product_name){
    return new Promise((resolve,reject)=>{
        let isproduct= null;
        for(let i= 0;i<product.length;i++){
            if(product[i].name==product_name){
                isproduct=product[i];
            }
        }
        if(!isproduct){
            return reject("product is not available",null)
        }
        else{
            resolve(isproduct.amount)
        }
    })
}
buyProduct("Iphone 16").then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})


function deductAmount(amount){
    return new Promise((resolve,reject)=>{
        if(amount>account_balance){
        return reject("your account balanace is low")
    }else{
        account_balance-=amount;
        resolve ("your product is purchased")    
    }
    })
}
// buyProduct("Iphone 16")
// .then((data)=>{
//     return deductAmount(data)
// })
// .then((message)=>{
//     console.log(message)
//     console.log(account_balance)
// })
// .catch((err)=>{
//     console.log(err)
// })

async function myfun(){
    try{
         let amount = await buyProduct("Iphone 16") // jbh tkk promise fullfil/reject na hojaye tbh tkk code aage nii jayega.
    let message=await deductAmount(amount)
     console.log(message)
    } catch(error){
        console.log(error)
    }
}
console.log(myfun());
console.log("start")
console.log("end")
