import { useState, useEffect } from "react";


function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(prev => prev + 1);
  };

  const decrement = () => {
    setCounter(prev => prev - 1);
  };

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <>
      <h1>counter is -  {counter} </h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App;