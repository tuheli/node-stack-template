import { Box, Container, Stack, Typography } from "@mui/material";
import { Link } from "../link/Link";
import { AppBar } from "../app-bar/AppBar";
import { BottomNavigation } from "../bottom-navigation/BottomNavigation";

export const AnotherPage = () => {
  return (
    <>
      <Box
        sx={{
          justifyContent: "space-between",
          alignItems: "space-between",
          display: "flex",
          flexDirection: "column",
          minHeight: "100dvh",
          pt: 2,
        }}
      >
        <Box>
          <AppBar position="static" />
        </Box>
        <Container>
          <Stack
            sx={{
              gap: 4,
              mt: 4,
              mb: 2,
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
                }}
              >
                <Typography variant="h4">
                  Node Stack Template - Another Page
                </Typography>
              </Box>
            </Box>
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
                <Link to="/">Back to Example page</Link>
              </Box>
            </Box>
          </Stack>
        </Container>
        <Box />
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
      </Box>
    </>
  );
};
