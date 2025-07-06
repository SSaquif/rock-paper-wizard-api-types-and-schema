// import { APIErrorResponse } from "../error/errors";
import { APIErrorResponse } from "../api/APIErrorResponseSchema";

export interface Session {
  session_id: string;
  user_id: string;
  is_admin: boolean;
  created_at: Date | string;
  updated_at: Date | string;
  expires_at: Date | string;
}

export type AuthenticatedSession =
  | {
      isError: false;
      session: Session;
    }
  | APIErrorResponse;
// (APIErrorResponse & {
//     isError: true;
//     message?: string;
//   });
