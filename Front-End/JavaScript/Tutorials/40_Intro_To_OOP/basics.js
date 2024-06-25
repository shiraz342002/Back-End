


class BankAccount {
    constructor(owner, balance) {
      this.owner = owner;
      this._balance = balance;  // Encapsulated property
    }
  
    deposit(amount) {
      if (amount > 0) {
        this._balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this._balance}`);
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this._balance) {
        this._balance -= amount;
        console.log(`Withdrew ${amount}. New balance: ${this._balance}`);
      }
    }
  
    getBalance() {
      return this._balance;
    }
    details(){
        console.log(`Your Name is : ${this.owner} and your Balance is ${this._balance}`)
    }
  
  }

let obj = new BankAccount("Shiraz Mazhar",5000);
obj.details()