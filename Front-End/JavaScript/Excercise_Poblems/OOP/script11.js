// Write a JavaScript program that creates a class called BankAccount with properties for account number, account holder name, and balance. Include methods to deposit, withdraw, and transfer money between accounts. Create multiple instances of the BankAccount class and perform operations such as depositing, withdrawing, and transferring money.

class BankAccount{
    constructor(acc_no,acc_holder_name,bal){
        this.acc_holder_name=acc_holder_name;
        this.acc_no=acc_no;
        this.bal=bal;
    }
    deposit(amount){
        this.bal+=amount;
        console.log(`${amount} has been added to your Account, Your new Balance is ${this.bal}`); 
    }
    withdraw(amount){
        this.bal-=amount;
        console.log(`${amount} has been withdrawn from your Account, Your new Balance is ${this.bal}`); 
    }

    display(){
        console.log("Account Number : "+this.acc_no);
        console.log("Account Name : "+this.acc_holder_name);
        console.log("Account Balance : "+this.bal);
        
    }
}
let obj = new BankAccount("341231270","Shiraz Mazhar",3000)
// obj.display()
obj.deposit(2000);
obj.withdraw(1000)
obj.display()
