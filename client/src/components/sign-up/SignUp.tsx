import {
  Button,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSignInMutation, useSignUpMutation } from "../../features/apiSlice";
import { useAppDispatch } from "../../app/hooks";
import { openedSnackbar } from "../../features/snackbarSlice";
import { isErrorMessage, saveUserInLocalStorage } from "../../common/common";
import { signedIn } from "../../features/userSlice";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signUp] = useSignUpMutation();
  const [signIn] = useSignInMutation();

  const dispatch = useAppDispatch();

  const onSubmit = async () => {
    try {
      await signUp({ username, password }).unwrap();

      const { user } = await signIn({ username, password }).unwrap();

      dispatch(
        signedIn({
          user,
        })
      );
      dispatch(openedSnackbar({ text: "Signed up successfully." }));
    } catch (error) {
      if (isErrorMessage(error)) {
        dispatch(openedSnackbar({ text: error.data.message }));
      } else {
        dispatch(
          openedSnackbar({ text: "Error signing up. Is the server running?" })
        );
      }
    }
  };

  return (
    <>
      <Paper
        sx={{
          p: 2,
          width: "100%",
        }}
      >
        <Stack
          sx={{
            gap: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mx: 1,
            }}
          >
            Sign up
          </Typography>
          <Stack
            component="form"
            onSubmit={onSubmit}
            sx={{
              gap: 2,
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Username"
              variant="outlined"
              autoComplete="current-username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              autoComplete="current-password"
              value={password}
              type="password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Button variant="contained" onClick={onSubmit}>
              Sign up
            </Button>
            <Typography
              sx={{
                textAlign: "center",
              }}
            >
              Already have an account? <Link href="/sign-in">Sign in</Link>
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};
