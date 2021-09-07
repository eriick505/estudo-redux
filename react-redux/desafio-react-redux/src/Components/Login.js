import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/login";

import styles from "./Login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <form onSubmit={onSubmit} className="anime">
      <label className={styles.label} htmlFor="username">
        Usuário:{" "}
      </label>
      <input
        className={styles.input}
        type="text"
        id="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <label className={styles.label} htmlFor="password">
        Senha:{" "}
      </label>
      <input
        className={styles.input}
        type="password"
        id="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button className={styles.button}>Enviar</button>
    </form>
  );
}

export default Login;
