//sytax 1
let functionName = function(){
    // code block
    // ...
    // ...
    console.log('function executed.');   
}

//call function
functionName();

//syntax 2
function functionName1(){
      // code block
    // ...
    // ...
    console.log('functionName1 executed.');     
}

//call function
functionName1();

//parameterized function

let paramFuntion = function(param){
        // code block
    // ...
    // ...
    console.log(`Parameterrized function executed with parameter ${param}.`);   
}

//call parameterized function
 paramFuntion('john')

 let fullName = function(firstName, lastName) {
    // code block
    // ...
    // ...
    console.log(`Full name is - ${firstName} ${lastName}.`);  
 }

 //function overloading not allowed
//  let fullName = function(firstName) {
//     // code block
//     // ...
//     // ...
//     console.log(`Full name is - ${firstName}.`);  
//  }

 //call parameterized function
 fullName('John', 'Doe');


 //retuning value from function
 let AddNumbers = function(num1, num2){
     return num1+num2;
 }

 console.log(AddNumbers(2,3));

 let MultiplyNumbers = function(num1, num2){
     return num1*num2;
 }

 //Parameterized funtion with default values
 let deafultParametersFunction = function(name='John', counter=0){
     console.log(`Name : ${name}, counter :${counter}`);
 }

 deafultParametersFunction();
 deafultParametersFunction('John Doe', 3)

 //Conclusion
//  reduce line of code or use inline 
//  use default params