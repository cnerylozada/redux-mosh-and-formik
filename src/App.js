import { addBug, removeBugById, resolveBugById } from "./store/bugs";
import { store } from "./store/configure-store";

const App = () => {
  store.subscribe(() => console.log(store.getState()));

  store.dispatch(addBug({ description: "my first bug" }));
  store.dispatch(addBug({ description: "my second bug" }));
  store.dispatch(addBug({ description: "my third bug" }));
  store.dispatch(resolveBugById({ id: 2 }));
  store.dispatch(removeBugById({ id: 1 }));

  return <div className="App"></div>;
};

export default App;
