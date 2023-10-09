import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface Wso2BladeProps {
  solution: {
    title: string;
  };
  language: {
    title: string;
  };
}

export const Banner = ({ solution, language }: Wso2BladeProps) => {
  return (
    <Box
      sx={{
        minHeight: 300,
        flexDirection: "row",
        display: "flex",
      }}
    >
        <Grid item container md={6}>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              minHeight: 300,
              backgroundColor: "grey.300",
              backdropFilter: "blur(5px)",
              flexDirection: "column",
              display: "flex",
              padding: 5,
            }}
          >
            <Grid container alignItems="center" justifyContent="center">
              <Grid
                item
                alignItems="center"
                sx={{
                  paddingRight: 5,
                  paddingLeft: 2,
                  paddingTop: 5,
                  paddingBottom: 5,
                }}
              >
                <Typography
                  variant="h3"
                  align="center"
                  color="text.primary"
                  maxWidth="md"
                  sx={{
                    fontSize: {
                      xs: "2.0rem",
                      sm: "2.2rem",
                      md: "2.3rem",
                      lg: "2.8rem",
                      xl: "3.0rem",
                    },
                  }}
                >
                  {solution.title}
                </Typography>
              </Grid>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                padding={2}
              >
                <Typography
                  variant="body1"
                  align="justify"
                  color="text.secondary"
                  maxWidth="lg"
                  lineHeight={1.7}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
                  odio reprehenderit accusantium animi vitae necessitatibus
                  molestiae eaque repellendus eos tempora cupiditate magni
                  laboriosam ex enim sapiente voluptatum facilis, voluptatem unde.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
                  odio reprehenderit accusantium animi vitae necessitatibus
                  molestiae eaque repellendus eos tempora cupiditate magni
                  laboriosam ex enim sapiente voluptatum facilis, voluptatem
                  unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Grid>
            </Grid>
            <Grid item alignItems="center" justifyContent="center" padding={1}>
              <Box
                component={"img"}
                src="wso2-logo.png"
                alt="WSO2 Logo"
                sx={{
                  height: {xs:75,sm:100, md:86,lg: 106},
                  width: {xs:191,sm:254, md:220,lg: 270},
                  // maxHeight: { xs: 233, md: 167 },
                  // maxWidth: { xs: 350, md: 250 },
                }}
              ></Box>
            </Grid>
          </Box>
        </Grid>
        <Grid item container md={6}>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              minHeight: 300,
              backgroundColor: "grey.300",
              backdropFilter: "blur(5px)",
              flexDirection: "column",
              display: "flex",
              padding: 5,
            }}
          >
            <Grid container alignItems="center" justifyContent="center">
              <Grid
                item
                alignItems="center"
                sx={{
                  paddingRight: 5,
                  paddingLeft: 2,
                  paddingTop: 5,
                  paddingBottom: 5,
                }}
              >
                <Typography
                  variant="h3"
                  align="center"
                  color="text.primary"
                  maxWidth="md"
                  sx={{
                    fontSize: {
                      xs: "2.0rem",
                      sm: "2.2rem",
                      md: "2.3rem",
                      lg: "2.8rem",
                      xl: "3.0rem",
                    },
                  }}
                >
                  {language.title}
                </Typography>
              </Grid>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                padding={2}
              >
                <Typography
                  variant="body1"
                  align="justify"
                  color="text.secondary"
                  maxWidth="lg"
                  lineHeight={1.7}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
                  odio reprehenderit accusantium animi vitae necessitatibus
                  molestiae eaque repellendus eos tempora cupiditate magni
                  laboriosam ex enim sapiente voluptatum facilis, voluptatem unde.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
                  odio reprehenderit accusantium animi vitae necessitatibus
                  molestiae eaque repellendus eos tempora cupiditate magni
                  laboriosam ex enim sapiente voluptatum facilis, voluptatem
                  unde.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" justifyContent="center" padding={2}>
              <Box
                component={"img"}
                src="ballerina-logo-grey.svg"
                alt="Ballerina Logo"
                sx={{
                  height: { xs: 60, sm: 90, md: 76, lg: 97 },
                  width: { xs: 198, sm: 297, md: 250, lg: 320 },
                  // maxHeight: { xs: 233, md: 167 },
                  // maxWidth: { xs: 350, md: 250 },
                }}
              ></Box>
            </Grid>
          </Box>
        </Grid>
    </Box>
  );
};

export default Banner;
