import express from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
} from "../controllers/studentController.js";

const studentRoutes = express.Router();

studentRoutes.get("/getAllStudents", getAllStudents);
studentRoutes.get("/getOneStudent/:id", getStudentById);
studentRoutes.post("/create", createStudent);
studentRoutes.put("/updateOneStudent/:id", updateStudent);
studentRoutes.delete("/deleteOneStudent/:id", deleteStudent);


export default studentRoutes
