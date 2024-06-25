import express from 'express';
import mongoose from "mongoose";
import { Todo } from './Models/Todo.js'; // Adjusted import path
const app = express();
const port = 3000;
// Middleware to parse JSON bodies
app.use(express.json());
async function startServer() {
  try {
    await mongoose.connect("mongodb://localhost:27017/todoapp", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
    app.get('/', async (req, res) => {
      const todo1 = new Todo({
        title: "Gym",
        desc: "Train muscles",
        isDone: false
      });
      await todo1.save();
      res.send('Hello World! xD gg');
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });

  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

startServer();
