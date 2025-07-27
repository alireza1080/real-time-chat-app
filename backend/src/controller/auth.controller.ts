import { Request, Response } from 'express';
import signUpValidator from '../validators/signUp.validator.js';
import { prisma } from '../services/database.service.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.utils.js';
import signInValidator from '../validators/signIn.validator.js';

const signUp = async (req: Request, res: Response) => {
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

    if (!success) {
      return res.status(400).json({
        success: false,
        message: error.issues[0].message,
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return res.status(400).json({
        success: false,
        message: 'Email is already taken',
      });
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
      omit: {
        password: true,
      },
    });

    if (!newUser) {
      return res.status(500).json({
        success: false,
        message: 'Failed to create user, try again later',
      });
    }

    const token = generateToken(newUser.id.toString());

    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: 'strict',
    });

    res.json({
      success: true,
      message: 'Sign up successful',
      data: newUser,
    });
  } catch (error) {
    console.log('Error in signUp', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

const signIn = async (req: Request, res: Response) => {
  try {
    if (!req.body)
      return res.status(400).json({
        message: 'email, password are required',
        success: false,
      });

    const { email, password } = req.body;

    const { success, error, data } = signInValidator.safeParse({
      email,
      password,
    });

    if (!success) {
      return res.status(400).json({
        success: false,
        message: error.issues[0].message,
      });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    const token = generateToken(user.id.toString());

    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: 'strict',
    });

    res.json({
      success: true,
      message: 'Sign in successful',
      data: user,
    });
  } catch (error) {
    console.log('Error in signIn', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

export { signUp };
