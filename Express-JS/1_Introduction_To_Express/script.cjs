const express = require('express')
const app = express()
const port = 3000
// app.use middleware ko use karne ke liye hota ha or express.static kisi public folder ko public bnane ke liye use hota ha  
// To give someone the file notes.txt only not the whole code we put it in a folder usually name Public

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World!)xD')
})

// app.get is used to get diff pages
app.get('/about', (req, res) => {
  res.send('Hello About xD')
  // It will work in browser using this address : http://localhost:3000/about
})
app.get('/blog',(req, res) => {
  res.send('Hello Blog')
})
// The above method to get different pages is lame so we use :slug
app.get('/blog/:slug',(req,res)=>{
res.send(`hello ${req.params.slug}`);
// console.log(req); // Print the whole freaking document object
console.log(req.params); // will print jo humne hmare slug me diya hoga For exp : { slug: 'Shiraz-is-gg' }
console.log(req.query); // will print the queries jo humne web url me use ki hongi like For exp : { q: 'dark', region: 'pk' }



//Now we change anything in the blog succeding folder for exp 
// http://localhost:3000/blog/Shiraz-is-gg //will work flawlessly
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})