// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.
class Vehicle{
    constructor(company,model,year){
        this.company=company;
        this.model=model;
        this.year=year;
    }
    details(){
        console.log("The Details of the Vehicle is :");
        console.log(this.company);
        console.log(this.model);
        console.log(this.year);
    }
}
class Car extends Vehicle{
    constructor(n_doors){
        super()
        this.n_doors=n_doors;
    }
    details(){
        console.log(this.n_doors);
    }
}

let obj1 = new Vehicle("Honda","Civic",2023);
let obj2 = new Car(4);
obj1.details()
obj2.details()