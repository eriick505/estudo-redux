import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { somar } from "./store/contador";
import { autoLogin, login } from "./store/login";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.login.user);

  function onSubmit(e) {
    e.preventDefault();
    dispatch(login({ username, password }));
  }

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <label style={{ display: "block" }} htmlFor="username">
          Usuário:{" "}
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <br />
        <br />
        <label style={{ display: "block" }} htmlFor="password">
          Senha:{" "}
        </label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <br />
        <br />
        <button>Enviar</button>
      </form>
      <p>{data?.email}</p>
      <button onClick={() => dispatch(somar(5))}>SOMAR</button>
    </>
  );
}

export default App;
