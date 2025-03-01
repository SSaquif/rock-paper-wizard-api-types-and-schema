import { z } from "zod";
import { usernameRegex } from "../utils/regex";

export const UserRegistrationFormSchema = z
  .object({
    username: z
      .string({
        required_error: "Username is required",
      })
      .trim()
      .regex(usernameRegex, "Username must contain only letters and numbers")
      .min(3, "Username should be at least 3 characters long")
      .max(20, "Username should be at most 20 characters long"),
    password: z
      .string({
        required_error: "Password is required",
      })
      .trim()
      .min(8, "Password should be at least 8 characters long"),
    confirmPassword: z
      .string({
        required_error: "Password confirmation is required",
      })
      .trim()
      .min(8, "Password should be at least 8 characters long"),
  })
  .superRefine((data) => {
    if (data.password !== data.confirmPassword) {
      return { confirmPassword: "Passwords do not match" };
    }
    return {};
  });

export type UserRegistrationEntry = z.infer<typeof UserRegistrationFormSchema>;
