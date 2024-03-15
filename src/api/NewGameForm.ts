// todo decide on the actual structure later
import { z } from "zod";
import { usernameRegex } from "../utils/regex";

const PlayerColors = z.enum([
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "brown",
]);

export const NewGameFormSchema = z
  .object({
    username: z
      .string({
        required_error: "Username is required",
      })
      .trim()
      .regex(usernameRegex, "Username must contain only letters and numbers")
      .min(3, "Username should be at least 3 characters long")
      .max(20, "Username should be at most 20 characters long"),
    numOfPlayers: z
      .number({
        required_error: "Number of players is required",
      })
      .min(2, "Number of players should be at least 2")
      .max(6, "Number of players should be at most 6"),
    password: z
      .string({
        required_error: "Password is required",
      })
      .trim()
      // .regex(passwordRegex, "Password must contain only letters and numbers")
      .min(8, "Password should be at least 8 characters long")
      .max(30, "Password should be at most 100 characters long"),
    confirmPassword: z.string(),
    selectedColor: z.enum(
      ["red", "blue", "green", "yellow", "purple", "brown"],
      {
        required_error: "Player must select a color",
      }
    ),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export type NewGameForm = z.infer<typeof NewGameFormSchema>;
