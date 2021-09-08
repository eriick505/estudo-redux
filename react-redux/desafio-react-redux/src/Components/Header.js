import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../store/login";

import styles from "./Header.module.css";

function Header() {
  const { user, token } = useSelector((state) => state.login);
  const loading = token.loading || user.loading;

  const dispatch = useDispatch();

  function logout() {
    if (user.data) {
      dispatch(userLogout());
    }
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Mini Dogs</h1>
      <button
        onClick={logout}
        className={`
        ${styles.login} 
        ${loading ? styles.loading : ""}
        ${user.data ? styles.loaded : ""}
        `}
      ></button>
    </header>
  );
}

export default Header;
