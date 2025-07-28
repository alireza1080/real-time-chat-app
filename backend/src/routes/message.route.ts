import { Router } from 'express';
import {
  getUsers,
  getMessages,
  sendMessage,
} from '../controllers/message.controller.js';

const router = Router();

router.get('/users', getUsers);
router.get('/:id', getMessages);
router.post('/send/:id', sendMessage);

export default router;
