import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200,
};

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
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/booking", bookingRoute);


// Listen to the server

app.listen(port, () => {
  connect();
  console.log(`Server is running in localhost:${port}`);
});


