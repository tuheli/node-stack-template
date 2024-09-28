import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "./components/theme-provider/ThemeProvider";
import { useAppSelector } from "./app/hooks";
import { useLocalStorageLogin } from "./hooks/useLocalStorageLogin";
import { Snackbar } from "./components/snackbar/Snackbar";
import { SignedInRoutes } from "./components/routes/SignedInRoutes";
import { SignedOutRoutes } from "./components/routes/SignedOutRoutes";

export const App = () => {
  const { user } = useAppSelector((state) => state.user);
  const { isLocalStorageLoginComplete } = useLocalStorageLogin();

  if (!isLocalStorageLoginComplete) {
    return null;
  }

  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        <>
          <Snackbar />
          {user ? <SignedInRoutes /> : <SignedOutRoutes />}
        </>
      </ThemeProvider>
    </>
  );
};
