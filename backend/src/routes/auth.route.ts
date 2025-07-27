import { Router } from 'express';
import {
  signUp,
  signIn,
  logout,
  getUser
} from '../controllers/auth.controller.js';

const router = Router();

router.post('/signup', signUp);

router.post('/signin', signIn);

router.delete('/logout', logout);

router.get('/get-user', getUser);

export default router;
