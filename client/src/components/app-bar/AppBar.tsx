import { Box, AppBar as MuiAppBar, Toolbar } from "@mui/material";
import { ChangeThemeButton } from "../theme-provider/ChangeThemeButton";
import { CSSProperties } from "@mui/material/styles/createMixins";
import { DesktopSizeMenu } from "./menu/desktop-size/DesktopSizeMenu";
import { MobileSizeMenu } from "./menu/mobile-size-menu/MobileSizeMenu";

interface AppBarProps {
  position: CSSProperties["position"];
}

export const AppBar = ({ position }: AppBarProps) => {
  return (
    <>
      <MuiAppBar
        sx={{
          position,
          top: 16,
          background: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            borderRadius: 999,
            mx: 2,
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          <Box>
            <ChangeThemeButton />
          </Box>
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <MobileSizeMenu />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <DesktopSizeMenu />
          </Box>
        </Toolbar>
      </MuiAppBar>
    </>
  );
};
