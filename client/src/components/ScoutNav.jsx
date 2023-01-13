import { AppBar, IconButton, styled, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Logout } from "./Logout";

const CustomButton = styled(IconButton)(({ theme }) => ({
  color: "white",
  fontSize: 15.5,
  fontFamily: "Chivo",
  fontWeight: "bold",
}));

export function ScoutNav() {
  return (
    <>
      <AppBar sx={{ height: 58, background: "#0e0e1d" }}>
        <Toolbar>
          <Typography sx={{ display: "flex" }} variant="h5">
            🕵️
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
              <NavLink to="scout-landing">
                <CustomButton size="small">Home</CustomButton>
              </NavLink>
            </li>
            <li>
              <NavLink to="add-title">
                <CustomButton size="small">Add title</CustomButton>
              </NavLink>
            </li>
            <li>
              <NavLink to="recent">
                <CustomButton size="small">Recent</CustomButton>
              </NavLink>
            </li>
            <li>
              <NavLink to="reports">
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
      <br />
      <br />
    </>
  );
}
