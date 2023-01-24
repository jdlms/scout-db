import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: ".5px solid #efefef",
  boxShadow: 24,
  p: 4,
};

export function LandingModal({ open, handleOpen, handleClose }) {
  return (
    <div>
      <span
        style={{ color: "#efefef", fontStyle: "italic", cursor: "pointer" }}
        onClick={handleOpen}
      >
        *What is this?
      </span>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            What is this?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Scout DB is a... Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
