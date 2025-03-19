export const SYSTEM_ERRORS = {
  BAD_REQUEST: "Bad Request",
  DB_DELETE_ERROR: "Error Deleting From Database",
  DB_INSERT_ERROR: "Error Inserting Into Database",
  DB_SELECT_ERROR: "Error Selecting From Database",
  DB_UPDATE_ERROR: "Error Updating Database",
  DUPLICATE_USERNAME: "Username Already Exists For This Game",
  EXISTING_USER: "User Already Exists",
  GAME_FULL: "Game Table Is Full",
  GAME_NOT_FOUND: "Game Not Found",
  GENERIC_ERROR: "OOPs Something Went Wrong!!",
  HIDDEN_FIELD_NOT_EMPTY: "Hidden Field Was Not Empty",
  INVALID_PASSWORD: "Invalid Password",
  INVALID_COLOR: "The Color Has Already Been Selected by Another Player",
  PASSWORD_REQUIRED: "Password is required",
  PASSWORD_MIN_LENGTH: "Password should be at least 8 characters long",
  PASSWORD_CONFIRMATION_REQUIRED: "Password confirmation is required",
  PASSWORD_MISMATCH: "Passwords do not match",
  SERVER_ERROR: "Server Error",
  USERNAME_REQUIRED: "Username is required",
  USERNAME_REGEX: "Username must contain only letters and numbers",
  USERNAME_MIN_LENGTH: "Username should be at least 3 characters long",
  USERNAME_MAX_LENGTH: "Username should be at most 20 characters long",
  USER_NOT_FOUND: "User Does Not Exist",
  ZOD_SCHEMA_VALIDATION_ERROR: "Zod Schema Validation Error",
} as const;

type XHRErrorType = typeof SYSTEM_ERRORS;
type XHRErrorKeys = keyof typeof SYSTEM_ERRORS;
export type XHRErrorMessages = XHRErrorType[XHRErrorKeys];

// To be used in the API response
export type APIErrorResponse = {
  error: XHRErrorMessages;
};
