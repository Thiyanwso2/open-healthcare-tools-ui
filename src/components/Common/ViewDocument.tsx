import { Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";

interface Props {
  url: string;
}

export const ViewDocument = ({ url }: Props) => {
  return (
    <>
      <Box sx={{ display: "flex", gap: 0.5 }}>
        <Typography color="primary.dark" variant="h6" sx={{ fontWeight: 400 }}>
          Need help?
        </Typography>
        <Link href={url} target="_blank" underline="none">
          <Typography
            color="primary.main"
            variant="h6"
            sx={{
              fontWeight: 400,
              transition: "0.2s",
              ":hover": {
                color: "primary.dark",
              },
            }}
          >
            View Documentation
          </Typography>
        </Link>
      </Box>
    </>
  );
};
