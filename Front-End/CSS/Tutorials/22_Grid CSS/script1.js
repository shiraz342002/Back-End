let arr1=[5,56,23,24,8,10,5,24,77,8];
let arr2=[5,56,23,10,24,77,8];
let temp=0;
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
       if(arr1[i]==arr2[j]){
        num=arr1[i];
        arr1.pop(num);
       }
    }
}
console.log(arr1);

    

