import express from 'express'
import cors from "cors";
// Enable CORS

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! xD gg')
})


//To implements CORS there are two methods
// npm install cors
//1: Using Middlewares :
app.use(cors()); //It will enable cors for all the all domains

//if we want it for specefic routes
app.use(
  "/api/users",
  cors({
      /* options */
  }),
  (req, res) => {
      // API logic
  }
);

// 2: Instead of using middlwares we can enable headers manually
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://frontend.com");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})