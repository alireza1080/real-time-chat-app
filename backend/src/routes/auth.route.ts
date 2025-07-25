import { Router } from "express";

const router = Router();

router.get('/signup', (_req, res) => {
  res.send('Hello World from signup route');
});

export default router;