import { AppBar, IconButton, styled, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Logout } from "./Logout";

const CustomButton = styled(IconButton)(({ theme }) => ({
  color: "white",
  fontSize: 15.5,
  fontWeight: "bold",
}));

export function ClientNav() {
  return (
    <Toolbar>
      <AppBar sx={{ height: 58, background: "#0e0e1d" }}>
        <Toolbar>
          <Typography sx={{ display: "flex" }} variant="h5">
            📚
          </Typography>
          <ul
            style={{
              display: "inline-flex",
              flexDirection: "row",
              flexGrow: 1,
              justifyContent: "flex-start",
            }}
          >
            <li>
              <NavLink to="client/landing">
                <CustomButton size="small">Home</CustomButton>
              </NavLink>
            </li>
            <li>
              <NavLink to="client/tracked">
                <CustomButton size="small">Tracked</CustomButton>
              </NavLink>
            </li>
            <li>
              <NavLink to="client/titles">
                <CustomButton size="small">Titles</CustomButton>
              </NavLink>
            </li>
            <li>
              <NavLink to="client/reports">
                <CustomButton size="small">Reports</CustomButton>
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <Logout />
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </Toolbar>
  );
}
