import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./store/login";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();

    dispatch(login({ username, password }));
  }

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
    </>
  );
}

export default App;
