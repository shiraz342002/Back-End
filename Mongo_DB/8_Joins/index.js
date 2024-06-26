import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/routes.js'
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World! xD gg')
})
mongoose.connect('mongodb://localhost:27017')
app.use(express.json())
app.use('/',routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})