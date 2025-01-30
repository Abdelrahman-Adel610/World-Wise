import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink to={"/"}>
      <img
        src="./logo.png"
        alt="Logo"
        style={{ height: "100%", width: "15.625rem" }}
      />
    </NavLink>
  );
}
