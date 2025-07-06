import { z } from "zod";
import { errorMessages } from "../error/errors";

export const APIErrorResponseSchema = z.object({
  isError: z.literal(true),
  // z.enum needs at least one elements
  error: z.enum(errorMessages as [string, ...string[]]),
  message: z.string().optional(),
  statusCode: z.number().optional(),
  details: z.any().optional(),
});
