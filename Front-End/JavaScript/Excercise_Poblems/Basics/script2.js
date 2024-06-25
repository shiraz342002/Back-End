
let arr = [5, 2, 8, 7, 7, 23, 11, 34, 34, 10];

function duplicateWithoutConsecutive(arr) {
    let newArr = [];
    let prev = null;
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        if (elem !== prev) {
            newArr.push(elem);  
            newArr.push(elem);  
        } 
        
        prev = elem; 
    }
    return newArr;
}
let result = duplicateWithoutConsecutive(arr);
console.log(result); 
