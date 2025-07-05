import { z } from "zod";
import { SessionSchema } from "./SessionSchema";
// import { APIErrorResponseSchema } from "./APIErrorResponseSchema";

const SuccessSessionResponseSchema = z.object({
  isError: z.literal(false),
  session: SessionSchema,
});

export type SuccessSessionResponse = z.infer<
  typeof SuccessSessionResponseSchema
>;

// export const AuthenticatedSessionSchema = z.discriminatedUnion("isError", [
//   SuccessSessionResponseSchema,
//   APIErrorResponseSchema,
// ]);
