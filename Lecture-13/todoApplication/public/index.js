//fetch
fetch("http://localhost:2412/todos")
.then((response)=>response.json())
.then((data)=>console.log(data))