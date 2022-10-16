import { useState } from "react";
import Counter from "./counter";
import CounterControls from "./counter-controls";

const CounterContainer = () => {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function resetCounter() {
    setCounter(0);
  }

  return (
    <div
      className="w-100 h-100
     bg-dark text-white d-flex flex-column justify-content-center align-items-center"
    >
      <Counter count={counter} />
      <div className="d-flex">
        <CounterControls value="+" change={increaseCounter} />
        <CounterControls value="Reset" change={resetCounter} />
        <CounterControls value="-" change={decreaseCounter} />
      </div>
    </div>
  );
};

export default CounterContainer;
