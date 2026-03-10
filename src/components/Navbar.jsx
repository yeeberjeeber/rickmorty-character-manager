import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/characters" end className={({ isActive }) => isActive ? "active" : ""}>
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink to="/characters/yours" end className={({ isActive }) => isActive ? "active" : ""}>
            Your Characters
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}