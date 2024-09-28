import { SnackbarCloseReason, Snackbar as MuiSnackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { closedSnackbar } from "../../features/snackbarSlice";

export const Snackbar = () => {
  const { isOpen, text } = useAppSelector((state) => state.snackbar);

  const dispatch = useAppDispatch();

  const handleClose = (
    _: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(closedSnackbar());
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <MuiSnackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={text}
        action={action}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      />
    </>
  );
};
