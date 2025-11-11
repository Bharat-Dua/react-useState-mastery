// toggle button challenge
import ToggleButton from "./challenges/01_ToggleButton/ToggleButton";
// counter challenge
import Counter from "./challenges/01_ToggleButton/02_Counter/Counter";

function App() {
  return (
    <div>
      {/* <ToggleButton /> */}
      <Counter />
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
