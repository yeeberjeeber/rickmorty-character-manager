import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/characters">Characters</NavLink>
        </li>
        <li>
          <NavLink to="/characters/2">One</NavLink>
        </li>
        <li>
          <NavLink to="/characters/new">New</NavLink>
        </li>
        <li>
          <NavLink to="/characters/2/edit">Edit</NavLink>
        </li>
      </ul>
    </nav>
  );
}