let num=[5,1,4];
var user=undefined;
while(user!=-1){
    console.log("Enter a number or -1 to exit:");
    user=prompt("Enter a number : ");
    user=Number(user);
    if(!isNaN(user)){
        num.unshift(user)
    }
}
for (const iterator of num) {
    console.log(iterator)
}
