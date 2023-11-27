import express from 'express';
import { StudentControllers } from './student.controllers';

const router = express.Router();

//will call controller function
router.post('/create-student', StudentControllers.createStudent);

//get all student
router.get('/', StudentControllers.getAllStudents);

//get single student by id
router.get('/:studentId', StudentControllers.getSingleStudent);

//delete
router.delete('/:studentId', StudentControllers.deleteStudent);

export const StudentsRoutes = router;
