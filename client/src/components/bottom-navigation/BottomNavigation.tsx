import Box from "@mui/material/Box";
import { Link, BottomNavigation as MuiBottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CabinIcon from "@mui/icons-material/Cabin";
import { useLocation } from "react-router-dom";

export const BottomNavigation = () => {
  const location = useLocation();

  return (
    <Box>
      <MuiBottomNavigation showLabels value={location.pathname}>
        <BottomNavigationAction
          LinkComponent={Link}
          href="/"
          value="/"
          label="Example"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          LinkComponent={Link}
          href="/another-page"
          value="/another-page"
          label="Another"
          icon={<CabinIcon />}
        />
      </MuiBottomNavigation>
    </Box>
  );
};
