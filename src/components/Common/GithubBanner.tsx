import { Box, Grid, Link, Stack, Typography, alpha } from "@mui/material";

interface Props {
  content: {
    title: string;
  };
  marginTop?: number;
  marginBottom?: number;
}

function GithubBanner({ content, marginTop = 3, marginBottom = 2 }: Props) {
  const heading = "HEY! WANT TO KNOW HOW IT IS BUILT?";
  const linkText = "CHECK OUT OUR CODE REPOSITORIES >>";
  return (
    <>
      <Box
        sx={{
          // backgroundImage: "url('github.png')",
          // backgroundBlendMode: "multiply",
          position: "relative",
          minHeight: 200,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#00A79D60",
            // backdropFilter: "blur(5px)",
            flexDirection: "row",
            display: "flex",
            minHeight: 200,
          }}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            padding={1}
            spacing={5}
          >
            <Grid
              container
              item
              lg={3}
              alignItems="center"
              justifyContent="center"
            >
              <img src="github.png" alt="github" width="100" />
            </Grid>
            <Grid item lg={6}>
              <Stack spacing={3}>
                <Typography
                  variant="h2"
                  align="center"
                  color="#00255C"
                  maxWidth="lg"
                >
                  {heading}
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="#00255C"
                  maxWidth="lg"
                >
                  <Link
                    href="https://google.com"
                    underline="none"
                    target="_blank"
                  >
                    {linkText}
                  </Link>
                </Typography>
              </Stack>
            </Grid>
            <Grid
              container
              item
              lg={3}
              alignItems="center"
              justifyContent="center"
            >
              <img src="github.png" alt="github" width="100" />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default GithubBanner;
