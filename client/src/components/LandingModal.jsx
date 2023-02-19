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
      <br />
      <span
        style={{
          color: "#efefef",
          textDecoration: "underline",
          marginTop: "10px",
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        What is this?
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
          <Typography id="modal-modal-description" sx={{ mt: 2}}>
            Scout DB is a... Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis mollis, est non cs, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}


//A book scout is a professional who helps publishers, literary agents, and film production companies find new and worthwhile books to acquire for publication or adaptation. They may work independently or for a scouting agency and are often experts in a specific genre or market. They read widely, stay up-to-date on industry trends, and have a keen eye for identifying potential bestsellers or literary gems. They often have extensive contacts within the publishing industry and can help match books with the right publisher or production company.