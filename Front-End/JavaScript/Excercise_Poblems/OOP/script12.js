// Write a JavaScript program that creates a class called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments.

class University{
    constructor(name){
        this.name=name;
        this.dep=[];
    }
    async addDep(dep_name) {
        await new Promise(resolve => {
            setTimeout(() => {
                this.dep.push(dep_name);
                console.log(`${dep_name} has been added to ${this.name}`);
                resolve();
            }, 2000);
        });
    }
    removeDep(dep_name){
        let index=this.dep.indexOf(dep_name);
        if(index!==0){
            this.dep.splice(index,1);
            console.log(`${dep_name} has been deleted from ${this.name}`); 
        }else{
            console.log("No Departments Found");
        }
    }
    displayDep() {
        console.log(`Following are Departments of ${this.name}:`);
        if (this.dep.length <= 0) {
            console.log("No Deparments Found");
        } else {
            this.dep.forEach(dep => console.log(dep));
        }
    }
}
async function main() {
    let obj = new University("Khwaja Fareed University");
    await obj.addDep("Computer Science");
    await obj.addDep("Artificial Intelligence");
    await obj.addDep("Cyber Security");
    obj.displayDep();
}

main();