import { z } from 'zod';

const signUpValidator = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(1, 'Full name is required')
      .min(3, 'Full name must be at least 3 characters')
      .max(100, 'Full name must be 100 characters or less')
      .transform((val) =>
        val
          .split(/\s+/)
          .map(
            (word) =>
              word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
          )
          .join(' '),
      ),
    email: z
      .string()
      .trim()
      .min(1, 'Email is required')
      .email('Invalid email address')
      .max(254, 'Email must be 254 characters or less')
      .transform((val) => val.toLowerCase()),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .max(128, 'Password must be 128 characters or less')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/\d/, 'Password must contain at least one digit')
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least one special character',
      ),
    profilePicture: z.string().optional(),
  })
  .transform((data) => ({
    ...data,
    profilePicture:
      data.profilePicture ||
      `https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(
        data.fullName,
      )}`,
  }));

export default signUpValidator;