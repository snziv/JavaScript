var john = {
    name:'I am john',
    age:24,
    isActive:false
}
var snziv = {
    name:'I am snziv',
    age:60,
    isActive:true
}
var marry = {
    name:'I am marry',
    age:42,
    isActive:false
}

let users = new Map();
console.log(typeof users);

//Map returns an irritability that mean you can use for/foreach to irrate through that 

users.set('john', john);
users.set('snziv', snziv);
users.set('marry', marry);

//  console.log(users)
// console.log(users.size)
// console.log(users.get('snziv'))
// console.log(users.get('snziv1'))
// console.log(users.values())
//  console.log(users.keys())

users.forEach((value,key)=>{
    console.log("values: ",value+", keys: ",key+ " <br>")
  })
users.forEach((ele,index)=>{
    console.log(ele.name)
})

// users.keys().forEach((ele,index)=>{
//     console.log(ele)
// })
// users.values().forEach((ele,index)=>{
//     console.log(ele.name)
// })

//for of
// console.log('for of')
// for (const [key, value] of users) {
//     console.log(key)
// }
// for (const [key, value] of users.entries()) {
//     console.log(key)
// }
// for (const key of users.keys()) {
//     console.log(key)
// }
// for (const value of users.values()) {
//     console.log(value)
// }

//converting array of aarays into map
const arrOfArrays = [[1,'One'],['2','Two'],[3,'Three']];
// const arrOfArrays = [[1,'One','dwa'],['2','Two'],[3,'Three']];
var arrMap = new Map(arrOfArrays);
console.log(arrMap);

arrMap.forEach((val,key)=>console.log(`Key : ${key} , value : ${val}`));


//performance
const {performance} = require('perf_hooks');
//  import { performance } from 'perf_hooks';
const myAwesomeArray = [1, 2, 3, 4, 5]

const startForEach = performance.now()
myAwesomeArray.forEach(x => (x + x) * 10000000000)
const endForEach = performance.now()
console.log(`Speed [forEach]: ${endForEach - startForEach} miliseconds`)

const startMap = performance.now()
myAwesomeArray.map(x => (x + x) * 10000000000)
const endMap = performance.now()
console.log(`Speed [map]: ${endMap - startMap} miliseconds`)

// var lib  = path.join(path.dirname(fs.realpathSync(__filename)), '../lib');
// console.log(lib);

console.log(process);