// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.
class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    calc_Annual_Salary(){
        return (this.salary*12)
    }
}
class Manager extends Employee{
    constructor(name,salary,dep){
        super(name,salary)
        this.dep=dep;
    }
    calc_Annual_Salary(){
        let bonus=((this.salary*20)/100)
        return (this.salary*12)+bonus;
    }
}
class Executive extends Employee{
    constructor(name,salary,dep){
        super(name,salary)
        this.dep=dep;
    }
    calc_Annual_Salary(){
        let bonus=((this.salary*40)/100)
        return (this.salary*12)+bonus;
    }
}

let emp = new Employee("Shiraz",20000);
console.log(emp.calc_Annual_Salary());
let man = new Manager("Affan",25000,"Android");
console.log(man.calc_Annual_Salary());
let exe= new Executive("Arslan",30000);
console.log(exe.calc_Annual_Salary());