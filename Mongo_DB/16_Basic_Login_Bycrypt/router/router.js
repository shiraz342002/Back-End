import Login_Model from "../models/login.js";
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

function authenticate_token(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.sendStatus(401);
  }
  jwt.verify(token, "defaultSecretKey", (err, decoded) => {
    if (err) {
      return res.sendStatus(403);
    }
    if (decoded.user_name !== "mercury_admin") {
      return res.status(403).json({ message: "Forbidden: Access restricted" });
    }
    req.user = decoded;
    next();
  });
}
router.get("/admin", authenticate_token, async (req, res) => {
  try {
    const login = await Login_Model.find();
    res.json(login);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post("/signup", async (req, res) => {
  try {
    const { user_name, password } = req.body;

    if (!user_name || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const existingUser = await Login_Model.findOne({ user_name });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Login_Model({ user_name, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { user_name, password } = req.body;

    if (!user_name || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const user = await Login_Model.findOne({ user_name });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ user_name: user.user_name }, "defaultSecretKey", {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.patch("/:id", authenticate_token, async (req, res) => {
  try {
    const { user_name, password } = req.body;

    if (req.user.user_name !== "mercury_admin") {
      return res
        .status(403)
        .json({ message: "Forbidden: Access restricted to mercury_admin" });
    }

    const updatedData = { user_name };
    if (password) {
      const salt = await bcrypt.genSalt(10);
      updatedData.password = await bcrypt.hash(password, salt);
    }

    const login = await Login_Model.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );
    if (!login) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(login);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
