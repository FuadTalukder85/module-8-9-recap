export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';
export type TAcademicSemesterName = 'Authom' | 'Summar' | 'Fall';
export type TAcademicSemesterCode = '01' | '02' | '03';
// Example usage
export type TAcademicSemester = {
  name: TAcademicSemesterName;
  code: TAcademicSemesterCode;
  year: string;
  startMonth: TMonths;
  endMonth: TMonths;
};
export type TAcademicSemesterNameCodeMapper = {
  [key: string]: string;
};
