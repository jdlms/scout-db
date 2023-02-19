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
        
          <h3>What is this?</h3>
          <Typography id="modal-modal-description" variant="body2" gutterBottom sx={{ mt: 2 }}>
            Scout DB is a prototype of an internal database and reporting tool built for book scouts
            and their clients.
          </Typography>
          <h3 id="modal-modal-title" variant="h6" component="h3">
            What is the problem?
          </h3>
          <Typography id="modal-modal-description" variant="body2" gutterBottom sx={{ mt: 2 }}>
            Scouts gather large amounts of information and report it to clients. Often this
            reporting is done via private local databases, email, phone, and pdfs. This is
            inefficient and communication can be haphazard or sporadic.
          </Typography>
          <h3 id="modal-modal-title" variant="h6" component="h3">
            What is the solution?
          </h3>
          <Typography id="modal-modal-description" variant="body2" gutterBottom sx={{ mt: 2 }}>
            Scout DB offers a streamlined way for book scouts to interact with their database, input
            information, track titles, and report to clients. For clients, it provides an online
            portal where large swaths of information can be easily managed, referenced, and
            highlighted.
          </Typography>
          <h3 id="modal-modal-title" variant="h6" component="h3">
            Ok, but what is a book scout?
          </h3>
          <Typography id="modal-modal-description" variant="body2" gutterBottom sx={{ mt: 2 }}>
            A book scout helps international publishers, literary agents, and film production
            companies find new and worthwhile books to acquire for publication or adaptation. They
            may work independently or for a scouting agency and are often experts in a specific
            genre or market. They read widely, stay up-to-date on industry trends, and have a keen
            eye for identifying potential bestsellers or overlooked gems. They often have extensive
            contacts within the publishing industry and can help match books with the right
            publisher or production company.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
