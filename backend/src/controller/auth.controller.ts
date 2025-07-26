import { NextFunction, Request, Response } from 'express';
import signUpValidator from '../validators/signUp.validator.js';

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body)
      return res.status(400).json({
        message: 'fullName, email, password are required',
        success: false,
      });

    const { fullName, email, password } = req.body;

    const { success, error, data } = signUpValidator.safeParse({
      fullName,
      email,
      password,
    });

    console.log(success, error?.issues[0]);

    if (!success) {
      return res.status(400).json({
        success: false,
        message: error.issues[0].message,
      });
    }

    res.json({ message: 'Sign up successful', data });
  } catch (error) {
    next(error);
  }
};

export { signUp };
