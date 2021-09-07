import { useSelector } from "react-redux";

import Loading from "./Helper/Loading";
import Login from "./Login";
import Photos from "./Photos";

function Content() {
  const { user, token } = useSelector((state) => state.login);

  if (user.loading || token.loading) return <Loading />;
  if (user.data) return <Photos />;
  return <Login />;
}

export default Content;
