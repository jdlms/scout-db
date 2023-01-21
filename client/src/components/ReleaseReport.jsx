import { Button } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../utils/consts";

export function ReleaseReport({ title, refetch, setViewDetails }) {
  const handleClick = async () => {
    try {
      setViewDetails(false);
      await axios.post(BASE_URL + `scout/release-report/`, title, { withCredentials: true });
      console.log("test");
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
