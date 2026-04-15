import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// 🔐 REGISTER
export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
  return res.status(400).json({
    msg: "Email and password are required",
        });
    }
    if (password.length < 6) {
  return res.status(400).json({
    msg: "Password must be at least 6 characters",
        });
    }

    // check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      msg: "User registered successfully",
      userId: user._id,
    });

  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// 🔐 LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(400).json({ msg: "All fields required" });
    }

    // find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // generate token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      msg: "Login successful",
      token,
    });

  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};