// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 27/5/2024  Time: 11:42 Pm     Author:  Shiraz Mazhar                      ***
// #***                                                                                  ***
// #***  Working On: Constructor in JS                                                   ***
// #***                                                                                  ***
// #****************************************************************************************

// class ke vars ko assign karne ke liye constructor use hote jiske parameter hum object banate waqt dete hen

class ReserveSeat{
    constructor(Name,Train_name,seat_no,coach_no,){
        this.Name=Name;
        this.Train_name=Train_name;
        this.seat_no=seat_no;
        this.coach_no=coach_no;
    }
    book(){
        console.log("Your Seat has been succesfully reserved");
        console.log("Name:",this.Name)
        console.log("Train Name:",this.Train_name)
        console.log("Coach Number:",this.coach_no)
        console.log("Seat Number:",this.seat_no)
        console.log("Thanks for Traveling With Pakistan Railways");
    }
    cancel(){
        console.log("Your order is cancelled successfully");
    }
}

let obj = new ReserveSeat("Shiraz Mazhar","34 DN Pak Business Express","28C",8);
console.log(obj.book());
obj.cancel()