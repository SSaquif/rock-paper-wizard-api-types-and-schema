export const SYSTEM_ERRORS = {
  DUPLICATE_USERNAME: "Username Already Exists For This Game",
  GAME_FULL: "Game Table Is Full",
  GAME_NOT_FOUND: "Game Not Found",
  GENERIC_ERROR: "OOPs Something Went Wrong!!",
  INVALID_PASSWORD: "Invalid Password",
  INVALID_COLOR: "The Color Has Already Been Selected by Another Player",
} as const;

type XHRErrorType = typeof SYSTEM_ERRORS;
type XHRErrorKeys = keyof typeof SYSTEM_ERRORS;
export type XHRErrorMessages = XHRErrorType[XHRErrorKeys];

// To be used in the API response
export type APIErrorResponse = {
  error: XHRErrorMessages;
};
