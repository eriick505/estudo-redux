const INCREMENTAR_TEMPO = "aluno/INCREMENTAR_TEMPO";
const REDUZIR_TEMPO = "aluno/REDUZIR_TEMPO";
const MODIFICAR_EMAIL = "aluno/MODIFICAR_EMAIL";

export const incrementar_tempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzir_tempo = () => ({ type: REDUZIR_TEMPO });
export const modificar_email = (email) => ({
  type: MODIFICAR_EMAIL,
  payload: email,
});

const initialState = {
  nome: "André Rafael",
  email: "andre@origamid.com",
  diasRestantes: 120,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTAR_TEMPO:
      return { ...state, diasRestantes: state.diasRestantes + 1 };
    case REDUZIR_TEMPO:
      return { ...state, diasRestantes: state.diasRestantes - 1 };
    case MODIFICAR_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export default reducer;
