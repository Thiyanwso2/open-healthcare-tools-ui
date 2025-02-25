import { Grid, Typography } from "@mui/material";
import { ARTICLE_BANNER_TITLE } from "../Configs/TextConstants";
import SwipeableStepper from "./SwipeableStepper";

interface Props {
  marginTop?: number;
  marginBottom?: number;
}

function ArticleBanner({ marginTop = 3, marginBottom = 2 }: Props) {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={5}
        paddingTop={10}
        paddingRight={5}
        paddingLeft={5}
        paddingBottom={5}
        maxWidth={{ xs: "xs", sm: "md", md: "md", lg: "lg", xl: "xl" }}
      >
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          spacing={2}
          paddingBottom={5}
        >
          <Typography
            variant="h2"
            align="center"
            maxWidth="lg"
            color="text.primary"
            paddingBottom={3}
          >
            {ARTICLE_BANNER_TITLE}
          </Typography>
        </Grid>
        <Grid
          container
          item
          alignItems="center"
          justifyContent="center"
          spacing={{ md: 2, lg: 3, xl: 5 }}
        >
          <SwipeableStepper></SwipeableStepper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ArticleBanner;
