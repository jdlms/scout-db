import { Button } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../utils/consts";

export function DeleteReport({ title, refetch }) {
  const handleClick = async () => {
    try {
      console.log(title);
      await axios.post(BASE_URL + `scout/delete-report`, title, { withCredentials: true });

      await refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button variant="contained" size="small" onClick={handleClick}>
      Delete
    </Button>
  );
}
