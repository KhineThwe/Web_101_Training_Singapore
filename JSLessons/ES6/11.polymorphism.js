//parent class or base class
//inheritance 
//reusable
class Animal{
    constructor(name,sound){
        this.name = name;
        this.sound = sound;
    }

    makeSound(){
        console.log(`${this.name} says ${this.sound}`);
    }
}

//child class or subclass
class Bird extends Animal{
    constructor(name,sound,canFly){
        super(name,sound);
        this.canFly = canFly;
    }

    //polymorphism  = many forms
    makeSound(){
        console.log(`${this.name} chirps ${this.sound}`);
    }

    fly(){
        if(this.canFly){
            console.log(`${this.name} is flying`);
        }else{
            console.log(`${this.name} cannot fly`);
        }
    }
}

//instance
const dog = new Animal('Dog','Woof');
const sparrow = new Bird('Sparrow','Tweet',true);
dog.makeSound();
sparrow.makeSound();
sparrow.fly();
