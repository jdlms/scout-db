import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Logout } from "./Logout";

export function ScoutNav() {
  return (
    <Toolbar>
      <AppBar sx={{ height: 60, background: "#0e0e1d" }}>
        <Toolbar>
          <ul
            style={{ display: "inline-flex", flexDirection: "row", justifyContent: "flex-start" }}
          >
            <li>
              <NavLink to="scout-landing">
                <IconButton size="small">Home</IconButton>
              </NavLink>
            </li>
            <li>
              <NavLink to="add-title">
                <IconButton size="small">Add title</IconButton>
              </NavLink>
            </li>
            <li>
              <NavLink to="recent">
                <IconButton size="small">Recent</IconButton>
              </NavLink>
            </li>
            <li>
              <NavLink to="reports">
                <IconButton size="small">Reports</IconButton>
              </NavLink>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </Toolbar>
    // <nav>
    //   <span style={{ display: "inline", fontSize: "30px" }}>🕵️</span>
    //   <ul style={{ display: "inline-flex", flexDirection: "row", justifyContent: "flex-start" }}>
    //     <li>
    //       <NavLink
    //         to="scout-landing"
    //         style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
    //       >
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="add-title"
    //         style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
    //       >
    //         Add title
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="recent" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
    //         Recent
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="reports" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
    //         Reports
    //       </NavLink>
    //     </li>
    //     <li>
    //       <Logout />
    //     </li>
    //   </ul>
    // </nav>
  );
}
