// npm install express-ejs-layouts Allows you to include layouts in your file


import express from 'express'
import expressLayouts from "express-ejs-layouts";
const app = express()
const port = 3000


// For Debugging to check if sv is working
app.get('/', (req, res) => {
  res.send('Hello World! xD gg')
})
//
// This sets the view engine to EJS and tells Express to look for EJS templates in the views folder.
app.set("view engine", "ejs");

app.get("/view2", (req, res) => { //Working smooth
    res.render("index", { name: "Shiraz Mazhar" });
});
//Using ExpressLayouts Middleware
app.use(expressLayouts);
app.set("layout", "layout");




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})