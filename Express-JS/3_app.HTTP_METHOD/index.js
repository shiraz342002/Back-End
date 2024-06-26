import express from 'express'
const app = express()
const port = 3000

//1_ app.HTTP_METHOD basically different methods hen jo ke hum use karte different types of req ko handle karne ke liye
// like get,post,delete,put,patch


//Working
app.get('/', (req, res) => {
  res.send('Hello World asdasfd just Checking xD')
})

//Working with the help of Umair bhae(Try in home or later)
app.post('/ok', (req, res) => {

  return res.status(201).json({'ok':"yes"})
});

//Working perfectly
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(id); 
  res.send(`User ID is: ${id}`);
});

//Working Perfectly
app.get("/users", (req, res) => {
  const sort = req.query.sort;
  const limit = req.query.limit;
  const name = req.query.name;
  console.log(sort, limit, name); // desc 10 John
  console.log(req.query); // { sort: 'desc', limit: '10', name: 'John' }
  // ...
});

//Working
// -----------------------------Start of New Code----------------------
app.get("/blogs", (req, res) => {
  res.send("This is my blog");
  console.log(req.params.id);
});

//Working Fine
app.put("/users/:id", (req, res) => {
  // handle a PUT request to the /users/:id endpoint
  // :id is a placeholder for a specific user ID
  // you can access it using req.params.id
  // url will be something like this: http://localhost:5000/users/123
  // in this case, req.params.id will be 123
});

//Working Fine
app.patch("/users/:id", (req, res) => {
  // handle a PATCH request to the /users/:id endpoint
  res.send("I'm a Patch and working fine");
});

//Working FIne
app.delete("/users/:id", (req, res) => {
 res.send("Delete is Working ok")
});

app.get("/about", (req, res) => {
  const sort = req.query.sort || "asc";
  const limit = req.query.limit || 10;
  console.log(sort, limit);
});


//To get info from the url we use 
//Working Fine
//You can Also get an array using this 
// http://localhost:5000/users?name=rizwan&age=19&address[city]=karachi&address[country]=pakistan
app.get("/users", (req, res) => {
  const sort = req.query.name;
  console.log(name); // [ 'rizwan', 'ashiq' ]
});


// Headers hmare pass additional information ke liye hote hen
app.get("/users", (req, res) => {
  res.setHeader('X-Custom-Header', 'Hello World');
  const authorization = req.headers.authorization;
  console.log(authorization)
});


//Body
//Working fine with Umair bhae help (Try later)
app.post("/contact", express.urlencoded(), (req, res) => {
  console.log(req.body);

  const data=req.body;
  // {
  //     "name": "Rizwan",
  //     "email": "mrizwanashiq@outlook.com"
  // }
  return res.status(200).json({data})
});

// Miscellaneous
// Other than params, query, headers, and body, you can also get the request's method, protocol, hostname and plenty of other useful data.

app.get("/shiraz", (req, res) => {
  console.log(req.method); // GET
  console.log(req.protocol); // http
  console.log(req.hostname); // localhost
  console.log(req.ip); // ::1
  console.log(req.path); // /users
  console.log(req.originalUrl); // /users
  console.log(req.baseUrl); // ""
  console.log(req.subdomains); // []
  console.log(req.accepts("json")); // true
  console.log(req.accepts("application/json")); // true
  console.log(req.accepts("application/xml")); // false
  console.log(req.accepts("text/plain")); // true
  console.log(req.accepts("image/png")); // false
  console.log(req.accepts("*/*")); // true
  console.log(req.accepts()); // true
  console.log(req.is("json")); // false
  console.log(req.is("application/json")); // false
  console.log(req.is("application/xml")); // false
  // etc.
});


//------------------------------------------------------End of Part 1--------------------------------------





//-------------------------------End of NEw Cod---------------------------
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})