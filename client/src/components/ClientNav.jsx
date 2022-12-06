import { NavLink } from "react-router-dom";

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
            to="client-landing"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="saved-titles"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
          >
            Saved titles
          </NavLink>
        </li>
        <li>
          <NavLink to="Reports" style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
            Reports
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
