// function getCommentData(){
//     axios.get("https://jsonplaceholder.typicode.com/comments")
//     .then((res)=>{
//         console.log(res)
//     })
// }

// async function getCommentData() {
//     try {
//         const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
//         console.log(res.data);
//     } catch (err) {
//         console.log(err.message);
//     }
// }
// getCommentData();

function addUser(email,password){
    axios.post('http://localhost:2412/user', {
    email: email,
    password: password
  })
  .then((res)=>{
    console.log(res.data)
  }).catch((err)=>{
    console.log(err.message)
  })
}
addUser("parneet@gmail.com","12345")