import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface RedirectProps {
  to: "/";
}

export const Redirect = ({ to }: RedirectProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to);
  }, []);

  return null;
};
