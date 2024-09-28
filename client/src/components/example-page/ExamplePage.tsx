import { Box, Container, Stack, Typography } from "@mui/material";
import { ChangeThemeButton } from "../theme-provider/ChangeThemeButton";

export const ExamplePage = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            height: "100dvh",
            alignContent: "center",
          }}
        >
          <Stack
            sx={{
              gap: 4,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
              }}
            >
              Node stack template
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ChangeThemeButton />
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
