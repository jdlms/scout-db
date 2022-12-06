import { NavLink } from "react-router-dom";

export function ScoutNav() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let inactiveStyle = {
    textDecoration: "none",
  };

  return (
    <nav>
      <span style={{ display: "inline", fontSize: "30px" }}>🕵️</span>
      <ul style={{ display: "inline-flex", flexDirection: "row", justifyContent: "flex-start" }}>
        <li>
          <NavLink
            to="scout-landing"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="create-title"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            Create title
          </NavLink>
        </li>
        <li>
          <NavLink to="recent" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
            Recent
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
