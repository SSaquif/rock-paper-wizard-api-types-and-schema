export interface User {
  user_id: string;
  password: string;
  created_at: Date | string;
  updated_at: Date | string;
  // Maybe add later for password reset/recovery
  // email: string;
  // is_verified: boolean;
}
