'use client'

import { useState } from 'react';


const AutoCorrection = () => {
  // State declarations
  const [word, setWord] = useState("");
  const [corrections, setCorrections] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);

  // Event Handlers
  const onChange = async (event:any) => {
    const inputWord = event.target.value;
    setWord(inputWord);
    try {
      if (inputWord.trim() === "") {
        setCorrections([]);
      } else {
        const response = await fetch('/api/spellcheck', {
          method: 'POST',
          body: JSON.stringify({ word: word }),
        });
        const data = await response.json();
        setCorrections(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onSearch = (word:string) => {
    setWord(word);
    setCorrections([]);
  }

  const handleKeyDown = (e:any) => {
    // ... (unchanged)
  }

  return (
    <div className="suggestion-box">
      <h1 className="heading">Auto Correction Suggestor</h1>
      <div className="box-inner">
        {JSON.stringify(word)}
        {JSON.stringify(corrections)}
        {JSON.stringify(selectedItem)}
        <input
          type="text"
          placeholder="check"
          value={word}
          onChange={e => onChange(e)}
          className="suggestion-input"
          onKeyDown={e => handleKeyDown(e)}
        />
        {word && (
          <div className="dropdown">
            <ul>
              {corrections.map((v, i) => (
                <li key={i} onClick={() => onSearch(v)} className={selectedItem === i ? "active" : ""}>
                  {v}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default AutoCorrection;
