// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 17/5/2024  Time: 7:22 PM     Author:  Shiraz Mazhar                       ***
// #***                                                                                  ***
// #***  Working On:  Introdudction to OOP                                               ***
// #***                                                                                  ***
// #****************************************************************************************

// Basically oop se hum 1 hi dafa kuch specefic code bana lete jisko hum diff objects par baar baar run karte

// //Encapsulation
// // Encapsulation is the bundling of data and methods that operate on that data within a single unit or class.

// class Car {
//     constructor(brand, model, year) {
//       this.brand = brand;
//       this.model = model;
//       this.year = year;
//     }
  
//     getCarInfo() {
//       return `${this.year} ${this.brand} ${this.model}`;
//     }
//   }
  
//   const myCar = new Car('Toyota', 'Corolla', 2020);
//   console.log(myCar.getCarInfo());
// // Inheritance
// //   Inheritance allows a class to inherit properties and methods from another class.

// class Vehicle {
//     constructor(type) {
//       this.type = type;
//     }
//     getType() {
//       return this.type;
//     }
//   }
//   class Car extends Vehicle {
//     constructor(brand, model, year) {
//       super('Car');
//       this.brand = brand;
//       this.model = model;
//       this.year = year;
//     }
//     getCarInfo() {
//       return `${this.year} ${this.brand} ${this.model}`;
//     }
//   }
  
//   const myCar = new Car('Honda', 'Civic', 2018);
//   console.log(myCar.getType());    
//   console.log(myCar.getCarInfo());  
// Polymorphism
//  Polymorphism allows objects of different classes to be treated as objects of a common superclass.

// class Animal {
//     speak() {
//       console.log("The animal makes a sound");
//     }
//   }
  
//   class Dog extends Animal {
//     speak() {
//       console.log("The dog barks");
//     }
//   }
  
//   class Cat extends Animal {
//     speak() {
//       console.log("The cat meows");
//     }
//   }
  
//   const animals = [new Dog(), new Cat()];
  
//   animals.forEach(animal => animal.speak());  

// Abstraction
//   Abstraction is the concept of hiding the complex implementation details and showing only the necessary features.
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
  }
  
  const myAccount = new BankAccount('John Doe', 1000);
  myAccount.deposit(500);           
  myAccount.withdraw(200);    
  console.log(myAccount.getBalance());  // Output: 1300
  