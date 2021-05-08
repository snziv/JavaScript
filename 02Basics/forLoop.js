const days = ['Mod', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

for (let index = 0; index < days.length; index++) {
    const element = days[index];
    console.log(element);
}

console.log('\nforeach loop\n');
days.forEach((v,i) => {
    console.log(v);
});

// using callback function
let foreachCallback = function(value, index){
    console.log(`Value is ${value} and index is ${index}`);
}

days.forEach(foreachCallback);