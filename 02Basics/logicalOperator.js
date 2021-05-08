// && - AND - Both neededto be true
// || - OR - one must be true

let isLoggedIn = true;
let isAuthorized = true;

//for specific feature both user should be loggedin and authorized
if(isLoggedIn && isAuthorized)
console.log('Valid accesss.');
else
console.log('Invalid accesss.');

//for public feature 
if(isLoggedIn || isAuthorized)
console.log('Valid accesss.');
else
console.log('Invalid accesss.');