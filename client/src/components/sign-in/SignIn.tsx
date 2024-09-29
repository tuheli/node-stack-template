import {
  Box,
  Button,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSignInMutation } from "../../features/apiSlice";
import { useAppDispatch } from "../../app/hooks";
import { isErrorMessage, saveUserInLocalStorage } from "../../common/common";
import { signedIn } from "../../features/userSlice";
import { openedSnackbar } from "../../features/snackbarSlice";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signIn] = useSignInMutation();

  const dispatch = useAppDispatch();

  const onSubmit = async () => {
    try {
      const checkBox = document.getElementById(
        "stay-signed-in-on-this-device"
      ) as HTMLInputElement;

      const isStaySignedInChecked = checkBox && checkBox.value === "on";

      const { user } = await signIn({ username, password }).unwrap();

      if (isStaySignedInChecked) {
        saveUserInLocalStorage(user);
      }

      dispatch(signedIn({ user }));

      dispatch(openedSnackbar({ text: `Signed in as ${user.username}.` }));
    } catch (error) {
      if (isErrorMessage(error)) {
        dispatch(openedSnackbar({ text: error.data.message }));
      } else {
        dispatch(
          openedSnackbar({ text: "Error signing in. Is the server running?" })
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
            Sign in
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
            <Box
              sx={{
                display: "flex",
                gap: 1,
                my: 1,
              }}
            >
              <div>
                <input
                  type="checkbox"
                  id="stay-signed-in-on-this-device"
                  name="stay-signed-in-on-this-device"
                />
              </div>
              <label htmlFor="stay-signed-in-on-this-device">
                Stay signed in on this device
              </label>
            </Box>
            <Button variant="contained" onClick={onSubmit}>
              Sign in
            </Button>
            <Typography
              sx={{
                textAlign: "center",
              }}
            >
              Don't have an account? <Link href="/sign-up">Sign up</Link>
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};
