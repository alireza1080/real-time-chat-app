import { Router } from 'express';
import authRouter from './auth.route.js';
import messageRouter from './message.route.js';
import { upload } from '../utils/upload.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/messages', upload.single('image'), messageRouter);

export default router;
