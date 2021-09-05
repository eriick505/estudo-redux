import { useDispatch, useSelector } from "react-redux";
import { incrementar, reduzir } from "./store/contador";
import { abrir, fechar } from "./store/modal";

function App() {
  const { contador, modal } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      {modal && <h1>total: {contador}</h1>}

      <button onClick={() => dispatch(incrementar())}>incrementar</button>
      <button onClick={() => dispatch(reduzir())}>reduzir</button>

      <button onClick={() => dispatch(abrir())}>abrir modal</button>
      <button onClick={() => dispatch(fechar())}>fechar modal</button>
    </div>
  );
}

export default App;
