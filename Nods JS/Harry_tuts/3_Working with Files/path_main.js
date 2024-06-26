import path from "path"
// console.log(path);

let exp_path="PS D:\\Coding With Shiraz\\Web Development\\Sigma Web Developing\\Nods JS\\olofmeister.txt ";
console.log(path.extname(exp_path)); // To check type of extension of file

console.log(path.dirname(exp_path)); // To give us the path of directory where the file is located
console.log(path.basename(exp_path)); // To give us the name of the file 

let dir = "PS D:\\Coding With Shiraz\\Web Development\\Sigma Web Developing\\Nods JS";
let filename = "olofmeister.txt";
// used to join multiple path segments into a single path string
let fullPath = path.join(dir, filename);
console.log(fullPath);
