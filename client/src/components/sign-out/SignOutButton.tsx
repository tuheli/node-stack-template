import { Button } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { signedOut } from "../../features/userSlice";
import { removeUserFromLocalStorage } from "../../common/common";

export const SignOutButton = () => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    removeUserFromLocalStorage();
    dispatch(signedOut());
  };

  return <Button onClick={onClick}>Sign Out</Button>;
};
