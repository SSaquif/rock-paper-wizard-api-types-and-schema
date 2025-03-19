import { z } from "zod";
import { usernameRegex } from "../utils/regex";
import { SYSTEM_ERRORS } from "../error/errors";

export const UserRegistrationFormSchema = z
  .object({
    username: z
      .string({
        required_error: SYSTEM_ERRORS.USERNAME_REQUIRED,
      })
      .trim()
      .regex(usernameRegex, "Username must contain only letters and numbers")
      .min(3, "Username should be at least 3 characters long")
      .max(20, "Username should be at most 20 characters long"),
    password: z
      .string({
        required_error: SYSTEM_ERRORS.PASSWORD_REQUIRED,
      })
      .trim()
      .min(8, "Password should be at least 8 characters long"),
    confirmPassword: z
      .string({
        required_error: SYSTEM_ERRORS.PASSWORD_CONFIRMATION_REQUIRED,
      })
      .trim()
      .min(8, SYSTEM_ERRORS.PASSWORD_MIN_LENGTH),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      //@todo: Maybe rename the key, or figure out a better way streamline the structure
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: SYSTEM_ERRORS.PASSWORD_MISMATCH,
      });
      // return { confirmPassword: SYSTEM_ERRORS.PASSWORD_MISMATCH };
    }
    // return {};
  });

export type UserRegistrationEntry = z.infer<typeof UserRegistrationFormSchema>;
