import { useAppSelector } from "../../../../app/hooks";
import { Stack } from "@mui/material";
import { AppBarButton } from "../../AppBarButton";
import { SignOutButton } from "../../../sign-out/SignOutButton";
import { SwitchPageButtonAppBarVersion } from "../switch-page-button/SwitchPageButtonAppBarVersion";

export const DesktopSizeMenu = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 2,
        }}
      >
        <SwitchPageButtonAppBarVersion />
        <AppBarButton>Item 2</AppBarButton>
        {user ? (
          <>
            <SignOutButton />
          </>
        ) : (
          <AppBarButton>Item 3</AppBarButton>
        )}
      </Stack>
    </>
  );
};
