import { useAuthContext } from "@asgardeo/auth-react";
import { Box, Grid, Typography } from "@mui/material";
import { UNAUTHORIZED_LOGIN_LABEL } from "../Configs/TextConstants";
import GithubSignInButton from "./GithubSignInButton";
import GmailSignInButton from "./GmailSignInButton";
import MicrosoftSignInButton from "./MicrosoftSignInButton";
import PoweredByAsgardeo from "./PoweredByAsgardeo";
import { PreLoader } from "./PreLoader";

function LoginOverlaySmall() {
  const { signOut, signIn, state } = useAuthContext();
  const { isAuthenticated, isLoading } = state;

  const handleLogin = (fidp: string) => {
    if (isAuthenticated) {
      signOut();
    } else {
      signIn({
        fidp: fidp,
      });
    }
  };
  return (
    <Box
      id="box-login-overlay-small"
      sx={{
        position: "absolute",
        bgcolor: "rgba(0, 0, 0, 0.50)",
        color: "common.white",
        height: "calc(100vh - 197px)",
        width: { xs: "80%", sm: "88.5%" },
        zIndex: 1,
      }}
      marginTop={4.9}
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        id="grid-login-overlay-small"
        container
        alignItems="center"
        justifyContent="center"
        height="calc(100vh - 197px)"
      >
        <Box
          id="box-login-overlay-small-inner"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          display="flex"
          bgcolor="background.paper"
          width="80%"
          padding={1}
          borderRadius={1}
        >
          {isLoading && (
            <>
              <PreLoader setActive={true} size={40} />
              <Typography
                id="txt-login-loader-small"
                variant="body2"
                color="black"
                marginTop={2}
              >
                Please wait while we are loading the tool...
              </Typography>
            </>
          )}
          {!isLoading && (
            <>
              <Typography
                id="txt-social-login-display-small"
                variant="h6"
                marginBottom={2}
                color="common.black"
                textAlign="center"
              >
                {UNAUTHORIZED_LOGIN_LABEL}
              </Typography>
              <Box
                id="box-social-login-display-small"
                alignItems="center"
                flexDirection="column"
                display="flex"
                sx={{ justifyContent: "space-between" }}
              >
                <GmailSignInButton handleLogin={handleLogin} />
                <MicrosoftSignInButton handleLogin={handleLogin} />
                <GithubSignInButton handleLogin={handleLogin} />
              </Box>
              <PoweredByAsgardeo />
            </>
          )}
        </Box>
      </Grid>
    </Box>
  );
}

export default LoginOverlaySmall;
