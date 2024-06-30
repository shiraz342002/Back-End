import Login_Model from "../models/login.js";
import express from "express";
import bcrypt from "bcryptjs";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const login = await Login_Model.findOne();
    res.json(login);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const login = await Login_Model.findById(req.params.id);
    if (!login) {
      return res.status(404).json({ message: "User not found" });
    }
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

    const login = await Login_Model.create({
      user_name,
      password: hashedPassword,
    });

    res.status(200).json(login);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/check", async (req, res) => {
  try {
    const { user_name, password } = req.body;

    if (!user_name || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }

    const user = await Login_Model.findOne({ user_name });
    if (!user) {
      return res.status(400).send("User does not exist");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.send("Successfully logged in");
    } else {
      res.status(400).send("Invalid credentials");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { user_name, password } = req.body;

    if (!user_name || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
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
    res.status(200).json(login);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/test", async (req, res) => {
  try {
    const login = await Login_Model.deleteOne({ user_name: "Zubaida Naz" });
    if (login.deletedCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully", data: login });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const login = await Login_Model.findByIdAndDelete(req.params.id);
    if (!login) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(login);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
