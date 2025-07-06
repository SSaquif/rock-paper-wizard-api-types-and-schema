export const SUCCESS_MESSAGES = {
  SESSION_CREATED: "Session created successfully.",
  SESSION_DELETED: "Session deleted successfully.",
  USER_REGISTERED: "User registered successfully.",
  USER_LOGGED_IN: "User logged in successfully.",
  USER_LOGGED_OUT: "User logged out successfully.",
} as const;

export const successMessages = Object.values(SUCCESS_MESSAGES);

type SuccessMessagesType = typeof SUCCESS_MESSAGES;
type successMessagesKeys = keyof typeof SUCCESS_MESSAGES;
export type SuccessMessages = SuccessMessagesType[successMessagesKeys];

export type APISuccessResponse = {
  isError: false;
  message: SuccessMessages;
  statusCode?: number;
  details?: any;
};
