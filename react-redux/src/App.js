import { useDispatch, useSelector } from "react-redux";
import { incrementar, reduzir } from "./store/contador";

function App() {
  const { contador } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>total: {contador}</h1>

      <button onClick={() => dispatch(incrementar())}>incrementar</button>
      <button onClick={() => dispatch(reduzir())}>reduzir</button>
    </div>
  );
}

export default App;
