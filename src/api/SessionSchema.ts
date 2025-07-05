import { z } from "zod";

export const SessionSchema = z.object({
  session_id: z.string(),
  user_id: z.string(),
  is_admin: z.boolean(),
  created_at: z.union([z.date(), z.string()]),
  updated_at: z.union([z.date(), z.string()]),
  expires_at: z.union([z.date(), z.string()]),
});
