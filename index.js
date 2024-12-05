import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use("/student", studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
