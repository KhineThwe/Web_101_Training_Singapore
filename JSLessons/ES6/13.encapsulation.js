//encapsulation 
class BankAccount{
    constructor(accountHolder,balance =0){
       //private properties
       this._accountHolder = accountHolder;
       this._balance = balance;
    }

    //getter
    getAccountHolder(){
        return this._accountHolder;
    }

    getBalance(){
        return this._balance;
    }

    deposit(amount){
        if(amount > 0){
            this._balance+=amount;
            console.log(`${amount} deposited. New balance : ${this._balance}`);
        }else{
            console.log('Invalid deposit amount');
        }
    }
    
    withdraw(amount){
        if(amount > 0 && amount <= this._balance){
            this._balance -= amount;
            console.log(`${amount} withdrawn. New balance: ${this._balance}`);
        }else{
            console.log('Invalid withdrawal amount or insufficient funds');
        }
    }
}

const account1 = new BankAccount('John Doe',1000);
console.log('Account Holder: ',account1.getAccountHolder());
console.log('Balance: ',account1.getBalance());

account1.deposit(500);
account1.withdraw(200);