import { Button } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../utils/consts";

export function ReleaseReport({ title, refetch }) {
  const handleClick = async () => {
    try {
      await axios.post(BASE_URL + `scout/release-report/`, title, { withCredentials: true });

      await refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button variant="contained" size="small" onClick={handleClick}>
      Release
    </Button>
  );
}
