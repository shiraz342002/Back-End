// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.
class Person{
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country;
    }
    display(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.country);
        
    }
}
let obj1 = new Person("Shiraz",21,"Pakistan")
let obj2 = new Person("Sean Macleagan",34,"Ireland")
obj1.display()
obj2.display()