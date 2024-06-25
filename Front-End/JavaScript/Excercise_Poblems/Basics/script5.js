// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

// const pass_validator=((password)=>{
   

// }) 
function pass_validator(password) {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const lowercase_alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const uppercase_alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let containsNumber = false;
    let containsLowercase = false;
    let containsUppercase = false;
    
    if (password.length >= 8) {
        for (const char of password) {
            if (numbers.includes(char)) {
                containsNumber = true;
            }
            if (lowercase_alphabets.includes(char)) {
                containsLowercase = true;
            }
            if (uppercase_alphabets.includes(char)) {
                containsUppercase = true;
            }
            // Debugging log statements to track which conditions are being met
            console.log(`Character: ${char}, containsNumber: ${containsNumber}, containsLowercase: ${containsLowercase}, containsUppercase: ${containsUppercase}`);
        }
        
        if (containsNumber && containsLowercase && containsUppercase) {
            return true;
        }
    }
    
    return false;
}

let isStrong = pass_validator("Shiraz2002");
if (!isStrong) {
    console.log("Your Password is not secured");
} else {
    console.log("Your Password is 100% secured");
}


    

    