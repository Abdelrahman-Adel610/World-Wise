import { NavLink } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../Components/PageNav";
import { useAuthContext } from "../context/FakeAuthContext";
export default function Homepage() {
  const { isAuthorized } = useAuthContext();
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <NavLink to={isAuthorized ? "./App" : "./Login"} className="cta">
          START TRACKING NOW
        </NavLink>
      </section>
    </main>
  );
}
