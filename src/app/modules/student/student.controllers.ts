import { Request, Response } from 'express';
import { studentService } from './student.service';
// import studentValidationSchema from './student.validation';
// import { z } from 'zod'



//create student
const createStudent = async (req: Request, res: Response) => {
  try {

    // creating schema validation using zod

    // const studendValidationSchema = z.object({
    //   id: z.string(),
    //   name: z.object({
    //     firstName: z.string().max(20, {
    //       message: 'first name can not be more than 20 characters'
    //     }),
    //     middleName: z.string(),
    //     lastName: z.string()
    //   })
    // })


    const { student: studentData } = req.body;

    // data validation using joi
    // const { error, value } = studentValidationSchema.validate(studentData);
    const result = await studentService.createStudentInToDB(studentData);
    // console.log({ error }, { value });
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: error.details,
      })
    }
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    })
  }
};

//get all student
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Student are retrived successfully',
      data: result
    })
  } catch (err) {
    console.log(err);
  }
};

// get single student by id
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is rettrived successfully',
      data: result
    })
  } catch (err) {
    console.log(err);
  }
}

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent
};
