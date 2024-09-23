import { useContext } from "react";
import { SetThemeModeContext } from "../components/themeprovider/ThemeProviderContext";

export const useThemeMode = () => {
  const { mode, setMode } = useContext(SetThemeModeContext);
  return {
    mode,
    setMode,
  };
};
