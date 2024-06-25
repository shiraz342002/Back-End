// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.
class BankAccount{
    constructor(acc_num,bal){
        this.acc_num=acc_num;
        this.bal=bal;
    }
    withdraw(amount){
        if(this.bal>amount){
            this.bal=this.bal-amount;
        }
        console.log("Amount Withdrawn,Your Remaning Balance is :",this.bal);
    }
    Deposit(amount){
           this.bal=this.bal+amount;
        console.log("Amount Deposited Your new Balance is :",this.bal);
    }
    display(){
        console.log("Account Number : ",this.acc_num);
        console.log("Your Balance is : ",this.bal);
        
    }
}

let obj = new BankAccount(34123123,5000)
obj.display();
obj.Deposit(1000);
obj.display();
obj.withdraw(4000);
obj.display();

