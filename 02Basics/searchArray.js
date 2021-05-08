const myToDOs = ['Walk Dora', 'Breakfast', 'Check Mail', 'Perform Tasks', 'Send Report', 'Walk Dora','Good Night'];

console.log(myToDOs);

//find index of element
console.log(myToDOs.indexOf('walk Dora')); //should return -1 because case sensitive and returned when element is not found
console.log(myToDOs.indexOf('Walk Dora'));
console.log(myToDOs.indexOf('Walk Dora',1));

//using objects array
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



//example 1
console.log('example 1');
const index = myToDOs1.findIndex((ele,ind)=>{ 
    // console.log(ele);
    return !ele.isDone && ele.task=='Walk Dora'})
console.log(index);

//example 2
console.log('example 2');

const findTODOIndexError = function(myToDOs1, task , isDone){
     myToDOs1.findIndex((ele,ind)=>{ 
         // console.log(ele);
         return ele.isDone == isDone && ele.task==task});
 }

console.log(findTODOIndexError(myToDOs1, 'Walk Dora', true));
console.log(findTODOIndexError(myToDOs1, 'Walk Dora', false));
//outpout - undefined
//because function does not return anything

//example 3
console.log('example 3');
const findTODOIndex = function(myToDOs1, task , isDone){
   return myToDOs1.findIndex((ele,ind)=>{ 
        // console.log(ele);
        return ele.isDone == isDone && ele.task==task});
}

console.log(findTODOIndex(myToDOs1, 'Walk Dora', true));
console.log(findTODOIndex(myToDOs1, 'Walk Dora', false));

//example 4
console.log('example 4');
const findTODO = function(myToDOs1, task , isDone){
   return myToDOs1[myToDOs1.findIndex((ele,ind)=>{ 
        // console.log(ele);
        return ele.isDone == isDone && ele.task==task})];
}

console.log(findTODO(myToDOs1, 'Walk Dora', true));
console.log(findTODO(myToDOs1, 'Walk Dora', false));
console.log(findTODO(myToDOs1, 'Walk Dora1', false));

//example 5
//find element using find method
console.log('example 5');
const findTODODirectly = function(myToDOs1, task , isDone){
   return myToDOs1.find((ele,ind)=>{ 
        return ele.isDone == isDone && ele.task==task});
}

console.log(findTODODirectly(myToDOs1, 'Walk Dora', true));
console.log(findTODODirectly(myToDOs1, 'Walk Dora', false));
console.log(findTODODirectly(myToDOs1, 'Walk Dora1', false));


