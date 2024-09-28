import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { SwitchPageButtonMenuVersion } from "../switch-page-button/SwitchPageButtonMenuVersion";

export const MobileSizeMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onClickMenuIcon = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={onClickMenuIcon}
        size="large"
        sx={{
          color: "text.primary",
        }}
      >
        <MenuIcon />
      </IconButton>
      <div>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={closeMenu}
        >
          <SwitchPageButtonMenuVersion />
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </Menu>
      </div>
    </>
  );
};
