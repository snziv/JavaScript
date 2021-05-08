let globalLet = "globalLet";
var globalVar = "globalVar";

if(2==3){
console.log('block not reachable.');
}else{
let localLet = "localLet";
var localVar = "localVar";
console.log(localLet);
console.log(localVar);
console.log(globalLet);
console.log(globalVar);
}

// console.log(localLet);
console.log(localVar);
console.log(globalLet);
console.log(globalVar);