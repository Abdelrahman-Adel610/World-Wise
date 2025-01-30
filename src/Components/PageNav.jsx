import Logo from "./Logo";
import NavItems from "./Navigation";
import styles from "./NavItems.module.css";

export default function PageNav() {
  return (
    <div className={styles.nav}>
      <Logo />
      <NavItems />
    </div>
  );
}
