import { useEffect } from "react";
import { addBug } from "./redux/reducer";
import { store } from "./redux/store";

const App = () => {
  useEffect(() => {});

  store.subscribe(() => console.log("state change!"));
  store.dispatch(addBug("first bug"));

  return <div className="App"></div>;
};

export default App;
