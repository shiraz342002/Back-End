import express from "express";
const app = express();
import jwt from "jsonwebtoken";
app.use(express.json());
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "username" && password === "password") {
    const payload = {
      userId: 123,
      username: "user1",
      admin: true,
    };
    const token = jwt.sign(payload, "secretKey");
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
