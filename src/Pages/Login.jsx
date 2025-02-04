import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../Components/PageNav";
import { useAuthContext } from "../context/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login, isAuthorized } = useAuthContext();
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    login({ email, password });
  }
  useEffect(() => {
    if (isAuthorized) navigate("/app", { replace: true });
  }, [isAuthorized, navigate]);
  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
