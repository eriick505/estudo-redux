import { connect } from "react-redux";

const incrementar = () => ({ type: "INCREMENTAR" });

function AppWithReduxOldWay({ contador, incrementar }) {
  return (
    <div>
      <h1>Total: {contador}</h1>
      <button onClick={incrementar}>incrementar</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { contador: state };
};

const mapDispatchToProps = {
  incrementar,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppWithReduxOldWay);
