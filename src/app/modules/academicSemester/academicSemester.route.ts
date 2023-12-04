import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middleware/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

// //will call controller function
// // router.post('/create-student', StudentControllers.createStudent);

// //get all student
// router.get('/', StudentControllers.getAllStudents);

// //get single student by id
// router.get('/:studentId', StudentControllers.getSingleStudent);

// //delete
// router.delete('/:studentId', StudentControllers.deleteStudent);

export const AcademicSemesterRoutes = router;
