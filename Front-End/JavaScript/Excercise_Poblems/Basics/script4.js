// The Mirror Mirror:
// Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

// https://youtu.be/Vwxs9YJWsx4?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&t=386

var str="Shiraz"
string_reverse(str)
function string_reverse(str){
    var temp=null;
    var arr=[];
    for(const elem of str){
        temp=elem;
        arr.push(temp)
    }
    new_arr=arr.reverse();
    console.log(new_arr);
    rev_str=new_arr.toString();
    console.log(rev_str);
}
    
