export const createStore = () => {
  let state;
  const getState = () => state;
  return {
    getState,
  };
};
