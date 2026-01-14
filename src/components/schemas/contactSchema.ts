import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().min(1, "Company name is required"),
  position: z.string().optional(),

  projectType: z.string().min(1, "Project type is required"),
  budget: z.string().optional(),
  timeline: z.string().optional(),

  message: z.string().min(10, "Message must be at least 10 characters"),

  agreeToTerms: z.literal(true, {
    message: "You must agree to the terms and conditions",
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
