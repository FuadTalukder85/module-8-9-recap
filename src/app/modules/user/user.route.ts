import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controllers';

const router = express.Router();

const senaBahini = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  next();
};

router.post('/create-student', senaBahini, UserControllers.createStudent);

export const UserRoutes = router;
