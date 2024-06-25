import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,      // These lines are just here to avoid warnings
    useUnifiedTopology: true,
});
const connection = mongoose.connection; //To Create the connection 


connection.once("connected", () => console.log("Database Connected ~"));
connection.once("error", () => console.log("Database Connection Failed ~"));


//Schema is the structure of the data it's var names and the type of the data
const PersonSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    address: {
    street: String,
    city: String,
    state: String,
    zip: Number,
    country: String,
    },
});
//If we want to add required or default we can use it right here 
const PersonSchema2 = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    address: {
        street: String,
        city: String,
        state: String,
        zip: { type: Number },
        country: { type: String, default: "Pakistan" },
    },
});