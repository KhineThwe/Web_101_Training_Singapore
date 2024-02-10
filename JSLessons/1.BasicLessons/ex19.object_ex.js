const person ={
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor: "blue",
    fullName: function(){
        return this.firstName + " "+ this.lastName;
    }
}
const x = person["eyeColor"];
console.log(person.age);
console.log(person["firstName"].toUpperCase());
console.log(x);
console.log(person.fullName());

let json = JSON.stringify(person);
console.log(json);

let obj = JSON.parse(json);
console.log(obj);
