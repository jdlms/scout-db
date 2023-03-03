import { Typography } from "@mui/material";
import { useContext } from "react";
import { GetCurrentUserName } from "../../components/GetCurrentUserName";
import { UserContext } from "../../contexts/UserContext";

export const Client = () => {
  const { user, checkForUser } = useContext(UserContext);
  checkForUser;

  const userEmail = user["email"];

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Welcome to the client landing page...
      </Typography>
      {user["email"] ? <GetCurrentUserName userEmail={userEmail} /> : null}
    </div>
  );
};
