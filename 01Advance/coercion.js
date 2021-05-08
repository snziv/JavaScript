console.log('5' - 5);
console.log('5' + 5);

console.log('5s' - 5);

console.log(true+5); //true =1,false =0
console.log(false+5);

//get deatils from api 
// and init loginDetails
const loginDetails = [];
// something failed and loginDetails is not initialized
const loginId = loginDetails[0];//first item of array

if(loginId !== undefined)
console.log('Authorized user.');
else
console.log('Unauthorized user.');

if(loginId)
console.log('Authorized user.');
else
console.log('Unauthorized user.');


//Values that is interpreted as false
false
0
'' //empty string
null
undefined
