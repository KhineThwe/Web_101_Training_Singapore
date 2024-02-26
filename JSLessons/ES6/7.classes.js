class Vehicle{
    constructor(name,maker,engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails(){
        return `The name of the bike is ${this.name}`
    }
}

let bike1 = new Vehicle("Toyota","Yamada","134444");
let bike2 = new Vehicle("Ninja","Kawasaki","88888");

console.log(bike1.name);
console.log(bike2.name);
console.log(bike2.getDetails());