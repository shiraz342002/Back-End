// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

arr=[20,40,10,30,-5,15,10];
sum_arr(arr);
function sum_arr(arr){
    sum=0;
    for(const elem of arr){
        sum+=elem
        if(elem<-1){
            console.log(elem+" is a negative number");
            break
        }
    }
    console.log("The sum of Arrays is "+sum);
}
    