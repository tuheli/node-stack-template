import { PaletteOptions, ThemeOptions } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

const lightPalette: PaletteOptions = {
  background: {
    default: "#f5f5f5",
  },
  text: {
    primary: "#3d3d3d",
  },
};

const darkPalette: PaletteOptions = {
  background: {
    default: "#1e1e1e",
    paper: "#222222",
  },
  text: {
    primary: "#fcfcfc",
    secondary: "#fcfcfc",
  },
  primary: {
    main: "#55009bff",
  },
};

const getPalette = (mode: PaletteMode): PaletteOptions => {
  switch (mode) {
    case "light":
      return lightPalette;
    case "dark":
      return darkPalette;
    default:
      throw new Error("Invalid palette mode.");
  }
};

export const getTheme = (mode: PaletteMode): ThemeOptions => {
  return {
    palette: getPalette(mode),
    typography: {
      fontFamily: [
        "Montserrat",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    components: {
      MuiContainer: {
        defaultProps: {},
        styleOverrides: {
          root: {},
        },
      },
    },
  };
};
