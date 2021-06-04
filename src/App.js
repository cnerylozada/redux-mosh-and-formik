import { useEffect } from "react";
import { createStore } from "./redux/custom-store";

const App = () => {
  useEffect(() => {
    console.log(createStore().getState());
  });
  return <div className="App"></div>;
};

export default App;
