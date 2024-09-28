import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { toUser, User } from "../common/common";
import { useValidateAuthorizationTokenMutation } from "../features/apiSlice";
import { signedIn } from "../features/userSlice";

export const useLocalStorageLogin = () => {
  const [isLocalStorageLoginComplete, setIsLocalStorageLoginComplete] =
    useState(false);
  const [validateAuthorizationToken] = useValidateAuthorizationTokenMutation();

  const dispatch = useAppDispatch();

  const loginFromLocalStorage = async (): Promise<boolean> => {
    const userString = localStorage.getItem("user");
    if (!userString) {
      return false;
    }

    try {
      const userParsed = JSON.parse(userString);
      const user: User = toUser(userParsed);

      if (user === null) {
        return false;
      }

      const validationPayload = await validateAuthorizationToken({
        user,
      });

      if (!validationPayload.data) {
        return false;
      }

      dispatch(signedIn(validationPayload.data));
      return true;
    } catch (error) {
      return false;
    }
  };

  const asyncLocalStorageLogin = async () => {
    const isLoginSuccessful = await loginFromLocalStorage();
    if (!isLoginSuccessful) localStorage.removeItem("user");
    setIsLocalStorageLoginComplete(true);
  };

  useEffect(() => {
    asyncLocalStorageLogin();
  }, []);

  return { isLocalStorageLoginComplete };
};
