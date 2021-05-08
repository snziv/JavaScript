const helloWorld = function (message) {
    // console.log(message);
    return message;
}
console.log(helloWorld('Hello World!'));

//arrow funtion is sytactic sugar for existing function syntax 
// const helloWorldArrow = (message)=>{console.log(message)};
// helloWorldArrow('Hello World! from arrow function.');

//code optimization
const helloWorldArrow = (message)=>{ 
    // code blocks
    // ...
    // ...
    return message;
};
console.log(helloWorldArrow('Hello World! from arrow function.'));

//for inline arrow function with one line of code
const helloWorldArrow1 = (message)=>message+' inline!';
console.log(helloWorldArrow1('Hello World! from arrow function.'));

const myToDOs1 = [{
    task:'Walk Dora',
    isDone:true,
},
{
    task:'Breakfast',
    isDone:true,
},
{
    task:'Check Mail',
    isDone:true,
},
{
    task:'Perform Tasks',
    isDone:false,
},
{
    task:'Send Report',
    isDone:false,
},
{
    task:'Walk Dora',
    isDone:false,
},
{
    task:'Good Night',
    isDone:false,
}];

// const list = myToDOs1.filter((value, index)=>{ 
//    return value.isDone
// });
//inline code
const list = myToDOs1.filter((value, index)=> value.isDone);
console.log(list);


// const list1 = myToDOs1.filter((value, index)=> value.isDone && value.task == 'Walk Dora');
const list1 = myToDOs1.filter((value, index)=> !value.isDone);
console.log(list1);
console.log(`The indx of element is ${myToDOs1.indexOf(list1[0])} for task ${list1[0].task}`);

//print task of each from returned list
list1.forEach((ele)=>console.log(ele.task));

//Don't use arrow functions every where
const car = {
    name:'Honda',
    type:'Petrol',
    description:()=>{ //arrow function will not work here
       // console.log(`Car name is ${name}`); //error : name is not defined
        return `Car name is ${this.name}`;
    }
    //     description:function(){ //use normal function callback
    //    // console.log(`Car name is ${name}`); //error : name is not defined
    //     return `Car name is ${this.name}`;
    // }
}

console.log(car.description())