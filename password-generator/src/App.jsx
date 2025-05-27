import React, { useState } from 'react';
import usepasswordgenerator from './hooks/use-password-generator';

const App = () => {
    const [length, setLength] = useState(4);
    const [checkboxData, setCheckboxData] = useState([
        { title: "Include Uppercase Letters", state: false },
        { title: "Include Lowercase Letters", state: false },
        { title: "Include Number", state: false },
        { title: "Include Symbols", state: false },
    ]);

    const handleCheckboxChange = (i) => {
        const updatedCheckboxData = [...checkboxData];
        updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
        setCheckboxData(updatedCheckboxData);
    };

    const { password, errorMessage, generatePassword } = usepasswordgenerator();

    return (
        <div className='container'>
            {/* Password text and copy */}
            {password && (
                <div className="header">
                    <div className="title">{password}</div>
                    <button className='copyBtn' onClick={() => navigator.clipboard.writeText(password)}>
                        Copy
                    </button>
                </div>
            )}

            {/* Character length */}
            <div className="charLength">
                <span>
                    <label>Character Length</label>
                    <label>{length}</label>
                </span>
                <input
                    type="range"
                    min="4"
                    max="28"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                />
            </div>

            {/* Checkboxes */}
            <div className="checkboxes">
                {checkboxData.map((checkbox, index) => (
                    <div key={index}>
                        <input
                            onChange={() => handleCheckboxChange(index)}
                            type="checkbox"
                            checked={checkbox.state}
                        />
                        <label>{checkbox.title}</label>
                    </div>
                ))}
            </div>

            {/* Error Message */}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            {/* Generate Button */}
            <button
                onClick={() => generatePassword(checkboxData, length)}
                className='generateBtn'
            >
                Generate Password
            </button>
        </div>
    );
};

export default App;
