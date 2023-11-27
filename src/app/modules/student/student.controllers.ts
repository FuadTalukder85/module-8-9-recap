import { Request, Response } from 'express';
import { studentService } from './student.service';


//create student
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentService.createStudentInToDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//get all student
const getAllStudents = async (req:Request, res: Response) => {
  try{
    const result = await studentService.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Student are retrived successfully',
      data: result
    })
  }catch(err){
    console.log(err);
  }  
};

// get single student by id
const getSingleStudent = async (req: Request, res: Response) => {
  try{
    const {studentId} = req.params;
    const result = await studentService.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is rettrived successfully',
      data: result
    })
  }catch(err){
    console.log(err);
  }
}

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent
};
