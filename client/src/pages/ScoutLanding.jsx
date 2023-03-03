import { Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { GetCurrentUserName } from "../components/GetCurrentUserName";

export function ScoutLanding() {
  const { user, checkForUser } = useContext(UserContext);
  checkForUser;

  const userEmail = user["email"];

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Welcome to the scout landing page...
      </Typography>
      {user["email"] ? <GetCurrentUserName userEmail={userEmail} /> : null}
    </div>
  );
}
