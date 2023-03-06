import { Typography } from "@mui/material";

export function GetCurrentUserName({ userEmail }) {
  let currentUserNoEmail = userEmail.replace(/@.*$/, "");
  let currentUser = currentUserNoEmail.charAt(0).toUpperCase() + currentUserNoEmail.slice(1);
  return (
    <Typography variant="h6" gutterBottom>
      Current user: <span style={{ color: "red" }}>{currentUser}</span>
    </Typography>
  );
}
