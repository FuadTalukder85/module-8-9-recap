import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentsRoutes } from './modules/student/student.route';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1/students', StudentsRoutes);

const getAControlar = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', getAControlar);
export default app;
