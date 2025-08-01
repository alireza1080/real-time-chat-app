import { z } from 'zod';

const objectIdRegex = /^[0-9a-fA-F]{24}$/;

const sendMessageValidator = z
  .object({
    senderId: z
      .string()
      .trim()
      .min(1, 'Sender ID is required')
      .regex(objectIdRegex, 'Invalid Sender ID'),
    receiverId: z
      .string()
      .trim()
      .min(1, 'Receiver ID is required')
      .regex(objectIdRegex, 'Invalid Receiver ID'),
    text: z
      .string({
        invalid_type_error: 'Text must be a string',
      })
      .trim()
      .optional(),
    image: z
      .string({
        invalid_type_error: 'Image must be a string',
      })
      .trim()
      .optional(),
  })
  .refine((data) => data.text || data.image, {
    message: 'Either text or an image is required',
    path: ['text'], // Attach error to the text field for clarity
  });

export default sendMessageValidator;
