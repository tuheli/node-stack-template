import { Button } from "@mui/material";
import { useThemeMode } from "../../hooks/useThemeMode";

export const ChangeThemeButton = () => {
  const { mode, setMode } = useThemeMode();

  const onClick = () => {
    const newTheme = mode === "light" ? "dark" : "light";
    setMode(newTheme);
  };

  return (
    <>
      <Button variant="outlined" onClick={onClick}>
        Change Theme
      </Button>
    </>
  );
};
