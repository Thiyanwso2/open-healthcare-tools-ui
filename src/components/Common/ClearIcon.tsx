import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Box, IconButton, Tooltip } from "@mui/material";

interface Props {
  size?: number;
  onClear: () => void;
  isDisabled?: boolean;
}

export const ClearIcon = ({
  size = 30,
  onClear,
  isDisabled = false,
}: Props) => {
  return (
    <Tooltip
      id="comp-clear-content-tooltip"
      key="clear-icon"
      title="Clear Content"
      placement="bottom"
    >
      <Box>
        <IconButton
          id="btn-clear-content"
          onClick={onClear}
          aria-label="Clear Icon Button"
          sx={{
            color: "text.primary",
          }}
          disabled={isDisabled}
        >
          <DeleteOutlineOutlinedIcon
            id="icon-clear-content"
            sx={{ fontSize: size }}
            aria-label="Clear Icon"
          />
        </IconButton>
      </Box>
    </Tooltip>
  );
};
