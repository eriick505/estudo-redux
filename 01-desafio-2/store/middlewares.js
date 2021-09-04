const thunk = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }

  return next(action);
};

const localStorage = (store) => (next) => (action) => {
  const results = next(action);

  if (action.localStorage !== undefined) {
    window.localStorage.setItem(
      action.localStorage,
      JSON.stringify(action.payload)
    );
  }

  return results;
};

export { thunk, localStorage };
