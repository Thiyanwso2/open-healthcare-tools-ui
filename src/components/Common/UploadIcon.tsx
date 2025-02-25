import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { IconButton, Tooltip } from "@mui/material";

interface Props {
  size?: number;
  readFile(data?: string | ArrayBuffer | null, errors?: Error): any;
  isDisabled?: boolean;
}

export const UploadIcon = ({
  size = 30,
  readFile,
  isDisabled = false,
}: Props) => {
  const reader = async (file: Blob): Promise<void> => {
    const fr = new FileReader();

    fr.onerror = (err: ProgressEvent<FileReader>) => {
      console.error("Error reading file:", err);
    };

    await new Promise<void>((resolve) => {
      fr.onload = () => {
        readFile(fr.result);
        resolve();
      };
      fr.readAsText(file);
    });
  };

  return (
    <>
      <input
        accept="text/*"
        id="input-upload-content"
        type="file"
        style={{ display: "none" }}
        onChange={(event) => {
          if (!event.target.files) {
            return;
          }
          let file = event.target.files;
          reader(file[0]);
        }}
        aria-label="Upload File"
        disabled={isDisabled}
      />
      <label id="comp-upload-content-label" htmlFor="icon-button-file">
        <Tooltip
          id="comp-upload-content-tooltip"
          key="upload-icon"
          title="Upload Content"
          placement="bottom"
        >
          <IconButton
            id="btn-upload-content"
            aria-label="upload file"
            sx={{
              color: "text.primary",
            }}
            component="span"
            disabled={isDisabled}
          >
            <FileUploadOutlinedIcon
              id="icon-upload-content"
              sx={{ fontSize: size }}
            />
          </IconButton>
        </Tooltip>
      </label>
    </>
  );
};
