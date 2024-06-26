import express from 'express'
const app = express()
const port = 3000

// 2. res (Response Object)
app.get('/', (req, res) => {
  res.send('Hello World! xD gg')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 
app.get('/about',(req,res)=>{
  res.json({ name: "John" }); // Content-Type: application/json
  // res.send({ name: "John" }); // Content-Type: application/json
  // res.send("<h1>Hello World</h1>"); // Content-Type: text/html
  // res.send("Hello World"); // Content-Type: text/html
  // res.status(200).send("OK"); // Content-Type: text/html
  // res.status(404).json({ error: "Not Found" }); // Content-Type: application/json
  // res.status(500).json({ error: "Internal Server Error" }); // Content-Type: application/json
})


