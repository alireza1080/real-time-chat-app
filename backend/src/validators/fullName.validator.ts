import { z } from 'zod';

const fullNameValidator = z
  .string({
    required_error: 'Full name is required',
    invalid_type_error: 'Full name must be a string',
  })
  .nonempty('Full name is required')
  .trim()
  .min(1, 'Full name is required')
  .min(3, 'Full name must be at least 3 characters')
  .max(100, 'Full name must be 100 characters or less')
  .transform((val) =>
    val
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' '),
  );
