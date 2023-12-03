import express from 'express';
import { UserControllers } from './user.controllers';

const router = express.Router();

router.post('/create-users', UserControllers.createStudent);

export const UserRoutes = router;
