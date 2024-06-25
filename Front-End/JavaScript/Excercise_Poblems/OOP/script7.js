// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book{
    constructor(title,author,pub_year){
        this.title=title;
        this.author=author;
        this.pub_year=pub_year;
    }
    display(){
        console.log("The Details of the books are ");
        console.log("The name of the book is :"+this.title);
        console.log("The Author of the book is :"+this.author);
        console.log("The Book was published in :"+this.pub_year);
    }
}
class Ebook extends Book{
    constructor(title,author,pub_year,price){
        super(title,author,pub_year)
        this.price=price;
    }
    display(){
        super.display()
        console.log("The Price of the Book is : "+this.price+" Rupees");
        
    }
}

let obj = new Book("The Three Musketeers","Alexandre Dumas",1844);
// obj.display();
let obj1 = new Ebook("The Harry Potter","Jk Rowling",1998,2000);
obj1.display()