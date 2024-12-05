import Student from '../models/Student.js';

// Get all students
export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Get student by ID
export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ message: 'Invalid ID', error: error.message });
    }
};

// Create new student
export const createStudent = async (req, res) => {
    try {
        const { name, email, age, grade } = req.body;

        if (!name || !email || !age || !grade) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newStudent = await Student.create({ name, email, age, grade });
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Update student by ID
export const updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: 'Invalid Update Request', error: error.message });
    }
};

// Delete student by ID
export const deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);

        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Invalid Delete Request', error: error.message });
    }
};
