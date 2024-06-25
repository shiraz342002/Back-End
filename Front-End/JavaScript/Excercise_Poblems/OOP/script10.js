// Write a JavaScript program that creates a class called Product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity. Create a subclass called PersonalCareProduct that inherits from the Product class and adds an additional property for the warranty period. Override the total price calculation method to include the warranty period. Create an instance of the PersonalCareProduct class and calculate its total price.

class product{
    constructor(p_id,p_name,p_price){
        this.p_id=p_id;
        this.p_name=p_name;
        this.p_price=p_price;
    }
    quantity(q){
        return this.p_price*q;
    }
    display(){
        console.log("Product id "+this.p_id);
        console.log("Product name "+this.p_name);
        console.log("Product price "+this.p_price); 
    }
}
class HealthCareProduct extends product{
    constructor(p_id,p_name,p_price,p_warranty){
        super(p_id,p_name,p_price);
        this.p_warranty=p_warranty
    }
    quantity(q){
        let total_price= super.quantity(q);
        return total_price+this.p_warranty;
    }
    display(){
        super.display()
        console.log("product Warranty :"+this.p_warranty);
    }
}

let obj = new HealthCareProduct(34,"Coca Cola",150,2);
console.log("Total Price : "+obj.quantity(5));
obj.display()
