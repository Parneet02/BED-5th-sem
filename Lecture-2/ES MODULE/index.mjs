export function add(a,b){  //named export
    return a+b
}
export function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}

export default mul; // default export in this export we can only export one function only.