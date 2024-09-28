import { Box, Container, Stack, Typography } from "@mui/material";
import { Link } from "../link/Link";
import { ChangeThemeButton } from "../theme-provider/ChangeThemeButton";

export const AnotherPage = () => {
  return (
    <>
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
              gap: 4,
              my: 2,
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
          </Stack>
        </Container>
      </Box>
    </>
  );
};
