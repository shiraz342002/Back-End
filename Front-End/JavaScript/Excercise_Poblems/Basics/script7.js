// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

str="Shiraz Mazhar"
vowel_counter(str)
function vowel_counter(str){
    counter=0;
   
    for(const elem of str){
        if(elem=='A' || elem=='a'|| elem=='E' || elem=='e' || elem=='I' || elem=='i' || elem=='O' || elem=='o' || elem=='U' || elem=='u' ){
            counter++;
        }
        // console.log(counter);
        
    }
    console.log("The total number of vowels in "+str+" are "+counter);
}