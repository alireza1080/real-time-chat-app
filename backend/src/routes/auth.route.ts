import { Router } from 'express';
import { signUp } from '../controller/auth.controller.js';
import { signIn } from '../controller/auth.controller.js';

const router = Router();

router.post('/signup', signUp);
router.post('/signin', signIn);

export default router;
