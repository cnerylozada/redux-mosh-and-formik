import { reducer } from "./reducer";

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((_) => _());
  };
  const getState = () => state;
  return {
    dispatch,
    getState,
    subscribe,
  };
};

export default createStore(reducer);
