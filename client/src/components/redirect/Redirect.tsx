import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

interface RedirectProps {
  to: "/";
}

export const Redirect = ({ to }: RedirectProps) => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    navigate(to);
  }, []);

  return null;
};
