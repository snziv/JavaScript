// class User{

// }
//  const user = new User();


//when class is instanciated using new 
//if it does not have default constructor it is implicitly called
//else explicity constructor is called
class User {
    constructor(firstName, lastName, openingAmount) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.openingAmount = openingAmount;
    }
}
const johnDoe = new User('John', 'Doe', 21000);
console.log(johnDoe);
console.log(johnDoe.firstName);

const user = new User();
console.log(user);
console.log(user.firstName);
//how to validate constructor parameter is required


class User1 {
    constructor(firstName, lastName, openingAmount) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.openingAmount = openingAmount;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getFullInfo() {
        return `Full name : ${this.firstName} ${this.lastName} and opening amount is ${this.openingAmount}.`;
    }
    updateOpeningAmount(amount) {
       return this.openingAmount = amount;
    }
}
const snzivGupta = new User1('Snziv', 'Gupta', 121000);
console.log(snzivGupta.getFullName());
console.log(snzivGupta.getFullInfo());
console.log(snzivGupta.updateOpeningAmount(2123));
console.log(snzivGupta.getFullInfo());
