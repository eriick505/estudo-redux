const INCREMETAR = "contador/INCREMETAR";
const REDUZIR = "contador/REDUZIR";

export const incrementar = () => ({ type: INCREMETAR });
export const reduzir = () => ({ type: INCREMETAR });

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMETAR:
      return state + 1;
    case REDUZIR:
      return state - 1;
    default:
      return state;
  }
};

export default reducer;
