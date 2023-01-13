import { Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function ScoutLanding() {
  const { checkForUser } = useContext(UserContext);
  checkForUser;
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Welcome to the scout landing page...
      </Typography>
    </div>
  );
}
