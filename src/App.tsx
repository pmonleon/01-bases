import CounterBy from "./CounterBy";
import Counter from "./Counter";
import CounterEffect from "./CounterEffect";
import CounterHook from "./CounterHook";
import CounterReducerComponent from "./counter-reducer/CounterReducerComponent";



function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initialValue = {0} />
      <br />
      <hr />
      <CounterBy />
      <br />
      <hr />
      <CounterEffect />
      <br />
      <hr />
      <CounterHook />
      <br />
      <hr />
      <CounterReducerComponent />
    </>
    
  );
}

export default App;
