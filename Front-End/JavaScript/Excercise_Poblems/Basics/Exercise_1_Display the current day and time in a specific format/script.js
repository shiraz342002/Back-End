var today= new Date();
var date=today.getDate();
var month=today.getMonth()+1;
var year=today.getFullYear();
console.log(year);
console.log(date)
if(date<10){
    date='0'+date;
}
if(month<10){
    date='0'+month;
}
//foramting the date now
// mm-dd-yyyy or dd-mm-yyyy
today=month+'-'+date+'-'+year;
console.log(today)
//mm/dd/yyyy
today=month+'/'+date+'/'+year;
console.log(today)