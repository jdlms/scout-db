import { NavLink } from "react-router-dom";
import { Logout } from "./Logout";

export function ClientNav() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let inactiveStyle = {
    textDecoration: "none",
  };

  return (
    <nav>
      <span style={{ display: "inline", fontSize: "30px" }}>📚</span>
      <ul style={{ display: "inline-flex", flexDirection: "row", justifyContent: "flex-start" }}>
        <li>
          <NavLink
            to="client/landing"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="client/tracked"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            Tracked
          </NavLink>
        </li>

        <li>
          <NavLink
            to="client/titles"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            Titles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="client/reports"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            Reports
          </NavLink>
        </li>

        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  );
}
