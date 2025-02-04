import { NavLink } from "react-router-dom";
import Styles from "./NavItems.module.css";
import { useAuthContext } from "../context/FakeAuthContext";
export default function NavItems() {
  const { isAuthorized } = useAuthContext();
  return (
    <ul>
      <li>
        <NavLink to="/Product">Product</NavLink>
      </li>
      <li>
        <NavLink to="/Pricing">Pricing</NavLink>
      </li>
      {!isAuthorized && (
        <li>
          <NavLink className={Styles.ctaLink} to="/Login">
            Login
          </NavLink>
        </li>
      )}
    </ul>
  );
}
