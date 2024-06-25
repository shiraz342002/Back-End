let obj= new Date();
console.log(obj)

let obj2= new Date(2002,9,26,4,59,34)
console.log(obj2)

let year=obj2.getFullYear();
console.log("The Year is :"+year)
let day=obj.getDay();
    console.log("The day is: "+day)  // saturday


    let dt=obj.getDate()
    console.log("The Date is "+dt)

    let month=obj.getMonth();
    console.log("The month is "+month)

    let time=obj.getHours();
    console.log("The Hour is :"+time) 

    let minuts=obj.getSeconds
    console.log("The Full Time is "+obj.getHours()+":"+obj.getMinutes()+":"+obj.getSeconds(),"PM");

    obj.setDate(27);
    obj.setFullYear(2003)
    obj.setMonth(9)
    obj.setHours(15)
    obj.setMinutes(23)
    obj.setSeconds(6)
    console.log(obj)

    console.log(Date.now())

    setInterval(updateTime,1000);

    function updateTime(){
        document.getElementById('time').innerHTML=new Date();
    }
