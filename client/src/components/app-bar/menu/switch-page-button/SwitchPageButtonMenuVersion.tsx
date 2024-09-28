import { useLocation, useNavigate } from "react-router-dom";
import { MenuItem } from "@mui/material";

export const SwitchPageButtonMenuVersion = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClickAnotherPage = () => {
    navigate("/another-page");
  };

  const onClickExamplePage = () => {
    navigate("/");
  };

  return (
    <MenuItem
      onClick={
        location.pathname === "/" ? onClickAnotherPage : onClickExamplePage
      }
    >
      {location.pathname === "/" ? "Another Page" : "Example Page"}
    </MenuItem>
  );
};
