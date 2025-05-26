import React, { useState } from 'react'

const App = () => {

  const [lenght, setLenght] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Number", state: false },
    { title: "Include Symbols", state: false },
  ]);


  const handleCheckboxChange = (i) => {
    const updateCheckboxData = [...checkboxData]
    checkboxData[i].state = !checkboxData[i].state
  }
  return (
    <div className='container'>
      {/* Password text and copy */}
      <div className="header">
        <div className="title">Kh6y#lh35</div>
        <button
          className='copyBtn'
          onClick={() => { }}
        >
          Copy
        </button>
      </div>
      {/* Charater lenght */}
      <div className="charLength">
        <span>
          <label>Character Length</label>
          <label>{lenght}</label>
        </span>
        <input
          type="range"
          min="4"
          max="28"
          value={lenght}
          onChange={(e) => setLenght(e.target.value)}
        />
      </div>
      {/* checkboxes */}
      <div className="checkboxes">
        {checkboxData.map((checkboxe, index) => {
          return <div key={index}>
            <input
              onChange={() => handleCheckboxChange(index)}
              type="checkbox"
              checked={checkboxe.state}
            />
            <label>{checkboxe.title}</label>
          </div>
        })}
      </div>
      {/* Strength  */}

      {/* Generate Button  */}
      <button
        onClick={() => { }}
        className='generateBtn'
      >
        Generate Password
      </button>


    </div>
  )
}

export default App
