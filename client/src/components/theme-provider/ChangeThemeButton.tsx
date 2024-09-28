import { IconButton } from "@mui/material";
import { useThemeMode } from "../../hooks/useThemeMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export const ChangeThemeButton = () => {
  const { mode, setMode } = useThemeMode();

  const onClick = () => {
    const newTheme = mode === "light" ? "dark" : "light";
    setMode(newTheme);
  };

  return (
    <>
      <IconButton
        size="large"
        onClick={onClick}
        sx={{
          color: "text.primary",
        }}
      >
        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </>
  );
};
