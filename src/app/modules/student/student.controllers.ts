import { studentService } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

//get all student
const getAllStudents = catchAsync(async (req, res) => {
  const result = await studentService.getAllStudentFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

// get single student by id
const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentService.getSingleStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

// delete student by id
const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentService.deleteStudentFromDB(studentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
