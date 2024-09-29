import { Box, Container, Stack, Typography } from "@mui/material";
import { SignIn } from "../sign-in/SignIn";
import { SignUp } from "../sign-up/SignUp";
import { AppBar } from "../app-bar/AppBar";
import { BottomNavigation } from "../bottom-navigation/BottomNavigation";

export const ExamplePage = () => {
  return (
    <>
      <AppBar position="sticky" />
      <Box
        sx={{
          minHeight: "100dvh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Container>
          <Stack
            sx={{
              gap: 6,
              mt: 4,
              mb: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                mb: 2,
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
                <Typography
                  sx={{
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  Example Sign Up Component
                </Typography>
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
                <Typography
                  sx={{
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  Example Sign In Component
                </Typography>
                <SignIn />
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "sticky",
          bottom: 0,
          zIndex: 9999,
        }}
      >
        <BottomNavigation />
      </Box>
    </>
  );
};
