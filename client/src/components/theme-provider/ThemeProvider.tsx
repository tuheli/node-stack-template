import { ReactNode, useState } from "react";
import {
  PaletteMode,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import { getTheme } from "../../theme/theme";
import { SetThemeModeContext } from "./ThemeProviderContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const theme = createTheme(getTheme(mode));

  return (
    <SetThemeModeContext.Provider value={{ mode, setMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </SetThemeModeContext.Provider>
  );
};
