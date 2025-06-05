import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);

  const squreValue = () =>{
    return counter * counter;
  }
  return (
    <div className='App'>
      <h2>Counter : {counter}</h2>
      <h2>Squared Counter : {squreValue()}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}

export default App
