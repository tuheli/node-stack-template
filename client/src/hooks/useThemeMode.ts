import { useContext } from "react";
import { SetThemeModeContext } from "../components/theme-provider/ThemeProviderContext";

export const useThemeMode = () => {
  const { mode, setMode } = useContext(SetThemeModeContext);
  return {
    mode,
    setMode,
  };
};
