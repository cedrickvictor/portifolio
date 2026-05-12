import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Subject is too short."),
  message: z.string().min(10, "Message is too short."),
});

export type ContactInput = z.infer<typeof contactSchema>;

