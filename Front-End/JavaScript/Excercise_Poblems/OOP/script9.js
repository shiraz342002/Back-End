// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.
class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.branches = [];
    }
    
    addBranch(b_name) {
        this.branches.push(b_name);
        console.log(`Branch '${b_name}' added to ${this.bankName}`);
    }

    removeBranch(branchName) {
        let index = this.branches.indexOf(branchName);
        if (index !== -1) {
            this.branches.splice(index, 1);
            console.log(`Branch '${branchName}' has been removed from ${this.bankName}`);
        } else {
            console.log(`Branch '${branchName}' does not exist in ${this.bankName}`);
        }
    }

    displayBranches() {
        console.log(`Following are Branches of ${this.bankName}:`);
        if (this.branches.length <= 0) {
            console.log("No Branches Found");
        } else {
            this.branches.forEach(branch => console.log(branch));
        }
    }
}

let myBank = new Bank("MyBank");
myBank.addBranch("Gulshan Iqbal");
myBank.addBranch("Abbasia Town");
myBank.addBranch("Sattelite Town");
myBank.addBranch("Jinnah Park");
myBank.displayBranches();
