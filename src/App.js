import { useEffect } from "react";
import store from "./redux/custom-store";
import { addBug } from "./redux/reducer";

const App = () => {
  useEffect(() => {
    store.dispatch(addBug("first bug"));
    console.log(store.getState());
  });
  return <div className="App"></div>;
};

export default App;
