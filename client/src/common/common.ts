export interface User {
  username: string;
  authorizationToken: string;
}

interface ErrorMessage {
  data: {
    message: string;
  };
}

export const isErrorMessage = (error: unknown): error is ErrorMessage => {
  return (
    typeof error === "object" &&
    error !== null &&
    "data" in error &&
    typeof error["data"] === "object" &&
    error["data"] !== null &&
    "message" in error["data"] &&
    typeof error["data"]["message"] === "string"
  );
};

export const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

export const toUser = (obj: unknown): User => {
  if (!obj || typeof obj !== "object") {
    throw new Error("Invalid user object");
  }

  if (!("username" in obj) || !isString(obj.username)) {
    throw new Error("Invalid username");
  }

  if (!("authorizationToken" in obj) || !isString(obj.authorizationToken)) {
    throw new Error("Invalid authorization token");
  }

  return {
    username: obj.username,
    authorizationToken: obj.authorizationToken,
  };
};

export const saveUserInLocalStorage = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};
