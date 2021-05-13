import { useEffect } from "react";
import { addBug, removeBugById } from "./redux/reducer";
import { store } from "./redux/store";

const App = () => {
  useEffect(() => {
    console.log(store.getState());

    store.dispatch(addBug("mi first bug!"));
    store.dispatch(addBug("mi second bug!"));
    console.log(store.getState());

    store.dispatch(removeBugById(1));
    console.log(store.getState());
  });
  return <div className="App"></div>;
};

export default App;
