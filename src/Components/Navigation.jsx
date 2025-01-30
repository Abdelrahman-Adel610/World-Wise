import { NavLink } from "react-router-dom";
import Styles from "./NavItems.module.css";
export default function NavItems() {
  return (
    <ul>
      <li>
        <NavLink to="/Product">Product</NavLink>
      </li>
      <li>
        <NavLink to="/Pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink className={Styles.ctaLink} to="/Login">
          Login
        </NavLink>
      </li>
    </ul>
  );
}
