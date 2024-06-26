import express from 'express'
const app = express()
const port = 3000

// 3. next (Next Function)
// The next function is used to call the next middleware or controller. So first of all, what is middleware, and see how it uses the next function.
// Middleware functions can be used for a variety of purposes, such as handling authentication, logging, error handling, parsing request data, and many others. They can be defined at the application level, the router level, or the route level.
app.use((req, res, next) => {
  console.log(`[${new Date()}] ${req.method} ${req.url}`);
  next();
});

//You can Create multiple middlewares
app.use((req, res, next) => {
  console.log("First Middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Second Middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Third Middleware");
  next();
});

app.get("/users", (req, res) => {
  res.send("Hello World");
});

const myMiddleware = (req, res, next) => {
  console.log("My Middleware");
  next();
};

app.get("/users", myMiddleware, (req, res) => {
  res.send("Hello World");
});

// Controllers
// Controllers are the functions that handle the request and send the response. For example, you can use controllers to get the data from the database, and then send the data to the client.
app.get("/about", (req, res) => {
  res.send("THis is controller function");
});


app.get('/', (req, res) => {
  res.send('Hello World!gg')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})