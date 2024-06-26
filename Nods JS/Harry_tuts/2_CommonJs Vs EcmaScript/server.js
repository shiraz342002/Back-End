//// Syntax for EcmaScript or type module

// import {name,age} from './shiraz.js'; // Ecma script module kaimport karne ka taqriqa

// console.log("Name is :"+name); 
// console.log("Age is :"+age);


// import cricketer from './shiraz.js'  // ecmascript yani type module ka syntax ha ye btw
// console.log(cricketer,__dirname,__filename);              // if type not module will throw error 

// ye __dirname or __file name uper wale func se aate


//// Syntax for Common JS


const a = require('./shiraz2.js')
console.log(a,"Directory name is :"+__dirname,"File name is :"+__filename);

// ye 1 defauly function hota jiske andar hmara code wrap hota ha or iske params ham use kar saqte
// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });


// // kisi bhi module ko import karne ke liye hum require use karenge
// //  btw ye tarika ha common js se karne ka  ye synchronously kaam karte hen
const fs = require('fs')
fs.createReadStream()

//How to change from Common Js to EcmaScript(workd asynchronously)
//hum package.json me jakar type ko change kardete hen

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain'); // for plain text
  res.setHeader('Content-Type', 'text/html'); // content type determines the type of content setting it to html
  res.end('<h1>Shiraz Mazzhar</h1>');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//TO install a package globally: npm --g [pkg_name]
//To check if a package is installed globally :   npm list -g nodemon
// nvm use 14: basically is used to work with older node version