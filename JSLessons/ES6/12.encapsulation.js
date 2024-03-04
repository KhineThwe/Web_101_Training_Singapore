//Encapsulation
// class BankAccount {
//     constructor(accountHolder,balance =0){
//         //
//     }
// }
class Person {
	#name; // Private member //_

	constructor(name) { 
		this.#name = name; 
	}

	#sayHello() { 
		console.log(`Hello, my name is ${this.#name}.`); 
	} 

	introduce() { 
		// Accessing a private method 
		this.#sayHello(); 
	} 
} 

const person = new Person('Bob'); 
// Accessing a public method that 
// accesses a private method 
person.introduce(); 

// Error: Private member is not accessible 
// console.log(person.#name); 
