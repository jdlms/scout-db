import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function DeleteTitle({ id }) {
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      await axios.get(BASE_URL + `titles/delete/${id}`, { withCredentials: true });
      navigate("/scout-landing");
    } catch (error) {}
  };

  return (
    <>
      <Button size="large" variant="outlined" onClick={handleClick}>
        Delete
      </Button>
    </>
  );
}
