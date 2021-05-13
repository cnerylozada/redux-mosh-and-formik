import { useEffect } from "react";
import { addBug, removeBugById } from "./redux/reducer";
import { store } from "./redux/store";

const App = () => {
  useEffect(() => {
    store.subscribe(() => {
      console.log(store.getState());
    });

    store.dispatch(addBug("mi first bug!"));
    store.dispatch(addBug("mi second bug!"));

    store.dispatch(removeBugById(1));
  });
  return <div className="App"></div>;
};

export default App;
