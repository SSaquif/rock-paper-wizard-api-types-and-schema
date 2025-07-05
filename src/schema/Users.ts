import { APIErrorResponse } from "../error/errors";

export interface User {
  user_id: string;
  password: string;
  is_admin: boolean;
  created_at: Date | string;
  updated_at: Date | string;
  // Maybe add later for password reset/recovery
  // email: string;
  // is_verified: boolean;
}

// @todo: Maybe breakdown into APIError and ClientError
export type AuthenticatedUser =
  | {
      isError: false;
      user: {
        user_id: string;
        is_admin: boolean;
        user_updated_at: Date | string;
        user_created_at: Date | string;
      };
      session: {
        session_id: string;
        session_created_at: Date | string;
        session_updated_at: Date | string;
        session_expires_at: Date | string;
      };
    }
  | (APIErrorResponse & {
      isError: true;
      message?: string;
    });
