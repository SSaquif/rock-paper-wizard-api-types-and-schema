export const XHR_ERRORS = {
  GAME_NOT_FOUND: "Game Not Found",
  GENERIC_ERROR: "OOPs Something Went Wrong!!",
  INVALID_PASSWORD: "Invalid Password",
} as const;

type XHRErrorType = typeof XHR_ERRORS;
type XHRErrorKeys = keyof typeof XHR_ERRORS;
export type XHRErrorMessages = XHRErrorType[XHRErrorKeys];
// export type XHRErrorMessages = (typeof XHR_ERRORS)[keyof typeof XHR_ERRORS]; //same as above

export type APIErrorResponse = {
  error: XHRErrorMessages;
};