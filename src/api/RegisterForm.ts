import { z } from "zod";
import { usernameRegex } from "../utils/regex";

export const RegisterFormSchema = z
  .object({
    username: z
      .string({
        required_error: "Username is required",
      })
      .trim()
      .regex(usernameRegex, "Username must contain only letters and numbers")
      .min(3, "Username should be at least 3 characters long")
      .max(20, "Username should be at most 20 characters long"),
    email: z
      .string({
        required_error: "Username is required",
      })
      .email(),
    /* 
     Decide later if I only want email
     */
    // .min(3, "Email Should at least be 3 characters long"),
    password: z
      .string({
        required_error: "Password is required",
      })
      .trim()
      .min(8, "Password should be at least 8 characters long"),
    confirmPassword: z
      .string({
        required_error: "Password is required",
      })
      .trim()
      .min(8, "Password should be at least 8 characters long"),
  })
  .superRefine(({ password, confirmPassword }) => {
    if (password !== confirmPassword) {
      return {
        message: "Passwords do not match",
        path: ["confirmPassword", "registerUser"],
      };
    }
    return null;
  });
