const fs = require("fs");

// fs.writeFile("../demo.txt","hello g27",function(err,data){
//     if(err) return console.log(err)
//         console.log("success!!")

// })

fs.writeFile("../demo2.txt","hello!!!!!!",function(err,data){
    if(err) return console.log(err)
        console.log("success!!")

})

//Assignment - 10 Marks
//write data in file demo.txt data(input) will be passed using terminal (process.arg)

console.log(process.argv[4]); 