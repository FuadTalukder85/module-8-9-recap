import { Student } from './student.interface';
import { StudentModel } from './student.model';

//create student
const createStudentInToDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};


//get all student
const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result
}

// get single student by id
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({id});
  return result
}

export const studentService = {
  createStudentInToDB,
  getAllStudentFromDB,
  getSingleStudentFromDB
};
