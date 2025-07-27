import { Router } from 'express';
import { signUp, signIn, logout } from '../controller/auth.controller.js';

const router = Router();

router.post('/signup', signUp);

router.post('/signin', signIn);

router.delete('/logout', logout);

export default router;
