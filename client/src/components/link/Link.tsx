import { Link as RouterDomLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

interface LinkProps {
  to: string;
  children: string;
}

export const Link = ({ to, children }: LinkProps) => {
  return (
    <MuiLink component={RouterDomLink} to={to}>
      {children}
    </MuiLink>
  );
};
