import { z } from "zod";
import { usernameRegex } from "../utils/regex";

export const JoinGameFormSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .trim()
    .regex(usernameRegex, "Username must contain only letters and numbers")
    .min(3, "Username should be at least 3 characters long")
    .max(20, "Username should be at most 20 characters long"),
  gameId: z
    .string({
      required_error: "Game ID is required",
    })
    .trim(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .trim()
    .min(8, "Password should be at least 8 characters long")
    .max(30, "Password should be at most 100 characters long"),
  selectedColor: z.enum(["red", "blue", "green", "yellow", "purple", "brown"], {
    required_error: "Player must select a color",
  }),
});

export type JoinGameForm = z.infer<typeof JoinGameFormSchema>;
