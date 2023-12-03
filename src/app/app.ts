import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentsRoutes } from './modules/student/student.route';
import { UserRoutes } from './modules/user/user.route';
import globalErrorHandler from './middleware/globalErrorHandler';
import notFound from './middleware/notFound';
import router from './routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1', router);

const testRoute = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', testRoute);

//global error
app.use(globalErrorHandler);

//not found
app.use(notFound);

export default app;
