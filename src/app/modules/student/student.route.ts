import express from 'express';
import { StudentControllers } from './student.controllers';

const router = express.Router();

//will call controller function
router.post('/create-student', StudentControllers.createStudent);
export const StudentsRoutes = router;
