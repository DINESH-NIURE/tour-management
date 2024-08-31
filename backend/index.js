import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import tourRoute from "./routes/tours.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Error connecting to MongoDB", err));
};
// Remove the extra closing curly brace

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/tours", tourRoute)



app.get("/", (req, res) => {

  res.send("Hello World");

});


// Listen to the server





app.listen(port, () => {
  connect();
  console.log(`Server is running in localhost:${port}`);
});
  