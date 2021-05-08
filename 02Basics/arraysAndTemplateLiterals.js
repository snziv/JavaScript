const array = ['item1','item2','item3', 'item4'];

console.log(array);
console.log(array.length);

//read from array - zero based indexing
console.log(array[0])
//last ele
console.log(array[array.length - 1]);


//string interpolation 
console.log(`Array length is ${array.length}`);

array[array.length]='item5';
console.log(array);
console.log(`Array length is ${array.length}`);

//Managing Start Part Array
//array.shift - removes first element and returns it
console.log(array.shift());
console.log(array);
console.log(array[0]);

//array.unshift - adds to first place/at index zero and return array length
console.log(array.unshift('item01'))
console.log(array);


//Managing End Part of Array
//array.pop - removes last element and return it
console.log(array.pop());
console.log(array);

//array.push - adds to end of array and return array length
console.log(array.push('item05'))
console.log(array);


//Managing Middle Part of Array
console.log(array.splice(2, 1, 'item03'))
console.log(array);

console.log(array.splice(1,2,'item02-03'))
console.log(array);

let newArray = ['nitem1','nitem2','nitem3'];
console.log(array.splice(1,2, newArray))
console.log(array);