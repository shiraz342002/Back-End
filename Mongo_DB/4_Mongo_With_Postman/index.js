import express from 'express';
import mongoose from 'mongoose';
import Person from './persons.js';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

async function startServer() {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://localhost:27017/Persons", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // Define route after connection is established
    app.get('/', async (req, res) => {
      try {
      const persons = await Person.insertMany([
    { name: "Person 1" },
    { name: "Person 2" },
    { name: "Person 3" },
]);

      console.log(persons); // [ { _id: 5f9e1b9b9c9c0b2b8c8b8b8b, name: 'Person 1', ... }, ... ]
        res.status(200).send('Users created successfully.');
      } catch (error) {
        console.error('Error creating users:', error); 
        res.status(500).send('Internal Server Error'); 
      }
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });

  } catch (error) {
    console.error('Error connecting to MongoDB', error); // Log MongoDB connection error
  }
}

startServer();
