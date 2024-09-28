import { useLocation, useNavigate } from "react-router-dom";

export const useNavigateBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateBack = () => {
    const isPathHistoryEmpty = location.key === "default";
    if (isPathHistoryEmpty) navigate("/");
    else navigate(-1);
  };

  return {
    navigateBack,
  };
};
