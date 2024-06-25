// The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.
student_names = [
    "John",
    "Emily",
    "Michael",
    "Sophia",
    "William",
    "Olivia",
    "James",
    "Ava",
    "Alexander",
    "Emma",
    "Daniel",
    "Isabella",
    "Matthew",
    "Mia",
    "David",
    "Charlotte",
    "Joseph",
    "Abigail",
    "Andrew",
    "Harper",
    "Anthony",
    "Evelyn",
    "Christopher",
    "Amelia",
    "Elizabeth",
    "Elijah",
    "Sofia",
    "Joshua",
    "Ella",
    "Benjamin"
]

let Gryffindor=[];
let Hufflepuff=[];
let Ravenclaw=[];
let Slytherin=[];

function sorting_hat(student_names,Gryffindor,Hufflepuff,Ravenclaw,Slytherin){
    let temp=null;
    for (const elem of student_names) {
        temp=elem;
        if(temp.length<6){
            Gryffindor.push(temp);
        }
        else if(temp.length>6 && temp.length<8){
            Hufflepuff.push(temp);
        }
        else if(temp.length>=8 && temp.length<10){
            Ravenclaw.push(temp)
        }
        else if(temp.length>=10){
            Slytherin.push(temp);
        }
    }
    
}
sorting_hat(student_names,Gryffindor,Hufflepuff,Ravenclaw,Slytherin)
console.log("The Students of Gryffindor are :"+Gryffindor);
console.log("The Students of Slytherin are :"+Slytherin);
console.log("The Students of Ravenclaw are :"+Ravenclaw);
console.log("The Students of Hufflepuff are :"+Hufflepuff);
