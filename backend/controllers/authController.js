import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register a user
export const register = async (req, res) => {
  try {
    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });
    await newUser.save();
    res.status(200).json({
      sucess: true,
      message: "Successfully registered",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Registration failed. Please try again",
    });
  }
};

// Login a user
export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });
    // if user does not exist
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    // if user exists
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    //    if password is invalid
    if (!validPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const { password, role, ...rest } = user._doc;
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15d",
      }
    );
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn, // 15 days
      })
      .status(200)
      .json({
        token,
        success: true,
        message: "Successfully logged in",
        data: { ...rest },
        role,
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Login failed. Please try again",
    });
  }
};
