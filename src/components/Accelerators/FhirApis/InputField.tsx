import { useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutline";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

export interface Props {
  fieldIndex: number;
  label: string;
  pValue: string;
  isRequired?: boolean;
  example: string;
  dataType: string;
  onChange: (fieldIndex: number, field: string, value: any) => void;
  isDeleteRequired?: boolean;
  onDelete?: (fieldIndex: number) => void;
  [key: string]: any;
}

const MuiTooltip = withStyles({
  tooltip: {
    backgroundColor: "#fcfcfc",
    border: "1px solid #b8b8b8",
  },
})(Tooltip);

export const InputField = ({
  fieldIndex,
  label,
  isRequired,
  example,
  dataType,
  pValue,
  onChange,
  onDelete,
  isDeleteRequired,
  ...props
}: Props) => {
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: string, value: any) => {
    let errorMessage: string | null = null;

    if (dataType === "integer" && isNaN(value)) {
      errorMessage = "Please enter a valid integer";
    } else if (dataType === "email" && !validateEmail(value)) {
      errorMessage = "Please enter a valid email address";
    } else if (dataType === "date" && !isValidDate(value)) {
      errorMessage = "Please enter a valid date";
    } else if (dataType === "boolean" && !isValidBoolean(value)) {
      errorMessage = "Please enter a valid boolean value";
    }

    setError(errorMessage);
    onChange(fieldIndex, field, value);
  };

  const handleDelete = () => {
    onDelete?.(fieldIndex);
  };

  const handleInfoOpen = () => {
    setIsInfoOpen(true);
  };

  const handleInfoClose = () => {
    setIsInfoOpen(false);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidDate = (dateString: string) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  };

  const isValidBoolean = (value: string) => {
    return value === "true" || value === "false";
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 1 }}>
      <Box sx={{ width: 250, mb: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ color: "primary.dark" }}>{label}</Typography>
          {isRequired && (
            <Typography
              sx={{ fontSize: 11, alignSelf: "flex-end", color: "#f54545" }}
            >
              *required
            </Typography>
          )}
        </Box>
        {dataType === "date" ? (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              slotProps={{ textField: { size: "small" } }}
              format="YYYY-MM-DD"
              value={dayjs(pValue || undefined)}
              onChange={(value) =>
                handleChange("value", value?.format("YYYY-MM-DD"))
              }
            />
          </LocalizationProvider>
        ) : (
          <TextField
            size="small"
            value=""
            onChange={(event) => handleChange("value", event.target.value)}
            {...props}
            error={error !== null}
            helperText={error}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MuiTooltip
                    title={
                      <Box sx={{ p: 1, color: "common.black" }}>
                        <Typography
                          variant="body2"
                          sx={{ color: "primary.dark" }}
                        >
                          ParamType:
                        </Typography>
                        <Typography sx={{ mb: 1 }}>{dataType}</Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "primary.dark" }}
                        >
                          Example:
                        </Typography>
                        <Typography>{example}</Typography>
                      </Box>
                    }
                    open={isInfoOpen}
                    onClose={handleInfoClose}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                  >
                    <IconButton
                      onMouseEnter={handleInfoOpen}
                      onMouseLeave={handleInfoClose}
                      sx={{ p: 0 }}
                    >
                      <HelpOutlineOutlinedIcon
                        sx={{ fontSize: 20, color: "grey.500" }}
                      />
                    </IconButton>
                  </MuiTooltip>
                </InputAdornment>
              ),
            }}
          />
        )}
      </Box>
      {isDeleteRequired && (
        <IconButton onClick={handleDelete} sx={{ mt: 1.5 }}>
          <RemoveCircleOutlineOutlinedIcon
            sx={{ fontSize: 26, color: "#f54545" }}
          />
        </IconButton>
      )}
    </Box>
  );
};
