import express from "express";
import mongoose from "mongoose";
import Joi from "joi";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

//CUSTOM VALIDATION
app.post("/customvalidation", (req, res) => {
  const data = req.body;

  if (!data.name) {
    res.status(400).send("name is required");
  }
  if (!data.email) {
    res.status(400).send("emailis required");
  }
  if (!data.password) {
    res.status(400).send("password is required");
  }
  if (typeof data.name !== "string") {
    res.status(400).send("enter valid name");
  }
  if (typeof data.email !== "string") {
    res.status(400).send("enter valid email");
  }
  if (typeof data.password !== "string") {
    res.status(400).send("enter valid password");
  }
  if (data.name.length < 3) {
    return res.status(400).json({
      message: "Name must be at least 3 characters long",
    });
  }

  if (data.password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters long",
    });
  } else {
    res.status(200).send("good work");
  }
});

//USING JOI
const schema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
  repeat_password: Joi.ref("password"),
  birth_year: Joi.number().integer().min(1900).max(2013),
  email: Joi.string().email({ minDomainSegments: 2 }),
});

const validate = (schema, key) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[key]);
    if (error) {
      return res.status(400).send(error);
    }
    next();
  };
};

app.post("/Joi", validate(schema, "body"), (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    // If data is invalid, send 400 Bad Request response
    res.status(400).send(result.error.details[0].message);
  }

  res.send("User created successfully");
});

//USING MONGOOSE
const schemas = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: String, min: 18 },
});

//JWT AUTHENTICATION
//Token Generation only
app.get("/jwt", (req, res) => {
  const secretKey = "secretKey";

  // Payload to be encoded in the token
  const payload = {
    userId: 123,
    username: "user1",
    admin: true,
  };

  // Options to configure the token
  const options = {
    expiresIn: "1h",
    algorithm: "HS256",
  };

  // Generate the token
  const token = jwt.sign(payload, secretKey, options);

  // Output the token

  console.log(token);
  res.send(token);
});

// TOKEN FOR USER
app.post("/login", (req, res) => {
    
    const { username, password } = req.body;
    // hardcoded username and password check
    if (username === "zainab" && password === "zainab") {
        // If there is a match, generate a JWT

        // Payload to be encoded in the token
        const payload = {
            userId: 123,
            username: "user1",
            admin: true,
        };

        // Generate the token
        const token = jwt.sign(payload, "secretKey"); // did not specify options

        // Send the token to the client
        res.json({ token });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

//DECODE AND MATCH TOKEN
const authenticate = (req, res, next) => {
    const token = req.header("authorization");
    if (!token) return res.status(401).send("Access denied. No token provided.");

    const bearerToken = token.split(" ")[1];

    try {
        const decoded = jwt.verify(bearerToken, "secretKey");
        req.user = decoded;
        
        next();
    } catch (ex) {
        
        res.status(400).send("Invalid token.");
    }
};
app.get("/authenticate", authenticate, (req, res) => {
    console.log(req.user); // { userId: 123, username: "user1", admin: true }
    res.json({ message: "Welcome to the API" });
});
const port = 3000;
app.listen(port);
