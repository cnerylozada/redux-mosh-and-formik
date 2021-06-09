import { useEffect } from "react";
import { addBug, removeBugById, resolveBugById } from "./redux/reducer";
import { store } from "./redux/store";
import { FormPage, LayoutPage } from "./pages";

const App = () => {
  useEffect(() => {
    store.subscribe(() => {
      console.log(store.getState());
    });

    store.dispatch(addBug("mi first bug!"));
    store.dispatch(addBug("mi second bug!"));
    store.dispatch(addBug("mi third bug!"));

    store.dispatch(removeBugById(1));
    store.dispatch(resolveBugById(3));
  });
  return (
    <div className="App">
      <LayoutPage />
    </div>
  );
};

export default App;
