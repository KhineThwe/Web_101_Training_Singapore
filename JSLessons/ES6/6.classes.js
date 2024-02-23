//class -> blueprint
class Vehicle{
    //parameterless constructor
    constructor(){
        console.log("Hi I am Parameterless constructor");
    }
    //parameterized constructor
    // constructor(name, specie) {//name = "Bees",specie= "Jame"
    //     console.log(name,specie);
    // }

    drive(){
        return "Can drive";
    }
}

let vehicle =new Vehicle();
// console.log(vehicle.drive());
//constructor - default function
//constructor - > object create -> work -> invoke