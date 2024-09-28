import { Box, Container, Stack, Typography } from "@mui/material";
import { ChangeThemeButton } from "../theme-provider/ChangeThemeButton";
import { SignIn } from "../sign-in/SignIn";
import { SignUp } from "../sign-up/SignUp";

export const ExamplePage = () => {
  return (
    <>
      <Box
        sx={{
          height: "100dvh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Container>
          <Stack
            sx={{
              gap: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  maxWidth: 500,
                }}
              >
                <Typography variant="h4">Node Stack Template</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  maxWidth: 500,
                }}
              >
                <ChangeThemeButton />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  maxWidth: 500,
                }}
              >
                <SignUp />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  maxWidth: 500,
                }}
              >
                <SignIn />
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
