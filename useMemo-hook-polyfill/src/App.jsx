import React, { useState, useMemo } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squreValue = () => {
    console.log("Expensive Calculation..");

    return counter * counter;
  };

  const memoisedSquaredValue = useMemo(squreValue, [counter])

  return (
    <div className='App'>
      <h2>Counter 1 : {counter}</h2>
      <h2>Squared Counter : {memoisedSquaredValue}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h2>Counter 2 : {counter2}</h2>
      <button onClick={() => setCounter2(counter2 - 1)}>Increment</button>
    </div>
  )
}

export default App
