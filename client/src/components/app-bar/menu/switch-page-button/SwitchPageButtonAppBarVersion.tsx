import { useLocation, useNavigate } from "react-router-dom";
import { AppBarButton } from "../../AppBarButton";

export const SwitchPageButtonAppBarVersion = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClickAnotherPage = () => {
    navigate("/another-page");
  };

  const onClickExamplePage = () => {
    navigate("/");
  };

  return (
    <AppBarButton
      onClick={
        location.pathname === "/" ? onClickAnotherPage : onClickExamplePage
      }
    >
      {location.pathname === "/" ? "Another Page" : "Example Page"}
    </AppBarButton>
  );
};
