import { Button } from "@mui/material";
import { MouseEventHandler } from "react";

interface AppBarButtonProps {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const AppBarButton = ({ onClick, children }: AppBarButtonProps) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: "text.primary",
      }}
    >
      {children}
    </Button>
  );
};
