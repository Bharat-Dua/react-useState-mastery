// toggle button challenge
import ToggleButton from "./challenges/01_ToggleButton/ToggleButton";
// counter challenge
import Counter from "./challenges/02_Counter/Counter";
// counter with configurable steps
import CounterWithConfigurableSteps from "./challenges/03_Counter-with-configurable-steps/CounterWithConfigurableSteps";
import DisplayAndEditInputText from "./challenges/04_Display_and_edit_a_single_line_text/DisplayAndEditInputText";
import MirrorAnInputLive from "./challenges/05_Mirror_an_input_live/MirrorAnInputLive";

function App() {
  return (
    <div>
      {/* <ToggleButton /> */}
      {/* <Counter /> */}
      {/* <CounterWithConfigurableSteps /> */}
      {/* <DisplayAndEditInputText /> */}
      <MirrorAnInputLive />
    </div>
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="p-8 text-center">
//       <h1>React useState Mastery 🚀</h1>
//       <p>Current count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default App;
