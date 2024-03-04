//abstraction class
function person(fname,lname){
    let firstname = fname;
    let lastname = lname;

    let getDetails_noaccess = function(){
        return `First name is : ${firstname} Last name is : ${lastname}`;
    }

    this.getDetails_acess = function(){
        return `First name is : ${firstname},Last name is : ${lastname}`;
    }
}

let person1 = new person("M","K");
console.log(person1.firstname);
console.log(person1.getDetails_acess());
console.log(person1.getDetails_noaccess)