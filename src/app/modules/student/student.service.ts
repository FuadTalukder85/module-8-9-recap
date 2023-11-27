import { TStudent } from './student.interface';
import { Student } from './student.model';

//create student
const createStudentInToDB = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('User already exists!');
  }

  const result = await Student.create(studentData); // build in statis method

  // const student = new Student(studentData); //create an instance

  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!');
  // }

  // const result = await student.save();
  return result;
};

//get all student
const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

// get single student by id
const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });

  const result = await Student.aggregate([{ $match: { id: id } }]);

  return result;
};

//delete student
const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentService = {
  createStudentInToDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
