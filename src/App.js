import { useEffect } from "react";
import { addBug, resolveBugById } from "./redux/reducer";
import { store } from "./redux/store";

const App = () => {
  useEffect(() => {});

  store.subscribe(() => console.log("state change!"));
  store.dispatch(addBug("first bug"));
  store.dispatch(addBug("second bug"));
  store.dispatch(resolveBugById(2));
  console.log(store.getState());

  return <div className="App"></div>;
};

export default App;
