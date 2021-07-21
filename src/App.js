import { Codevolution } from "./pages";

const App = () => {
  // useEffect(() => {
  //   store.subscribe(() => {
  //     console.log(store.getState());
  //   });

  //   store.dispatch(addBug("mi first bug!"));
  //   store.dispatch(addBug("mi second bug!"));
  //   store.dispatch(addBug("mi third bug!"));

  //   store.dispatch(removeBugById(1));
  //   store.dispatch(resolveBugById(3));
  // });
  return (
    <div className="App">
      <Codevolution />
    </div>
  );
};

export default App;
