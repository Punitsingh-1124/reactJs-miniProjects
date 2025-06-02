import React from 'react'

const App = () => {

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ]

  return (
    <div className='wrapper'>
      <div className="grid">
        {config.flat(1).map((value, index) => {

        })};
      </div>
    </div>
  )
}

export default App
