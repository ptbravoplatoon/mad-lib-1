import React, { Component, useState, useEffect } from 'react'
import './App.css'
import WordForm from './components/madlib-wordform/WordForm.js'
import Story from './components/madlib-story/Story.js'
import MadLibSelector from './components/madLibSelector.js'
import MadLibs from './madlibs/MadLibs.js'

const App = () => {
  const [madlibs, setmadlibs] = useState(MadLibs)
  const [selectedMadLib, setSelectedMadLib] = useState(madlibs[0])

  const onWordInputChange = (key, value, index) => {
    const newWord = {
      selectedMadLib
    }
    newWord.selectedMadLib.words[index] = {
      ...newWord.selectedMadLib.words[index],
      value: value
    }
    setSelectedMadLib({...newWord.selectedMadLib})
  }

  const handleMadLibChange = (event) => {
    setSelectedMadLib(madlibs[event.target.value])
  }

  return (
    <div className="App">
        <h1>MADLIBS!</h1>
        <MadLibSelector madlibs={madlibs} handleMadLibChange={handleMadLibChange}/><br />
        <WordForm words={selectedMadLib.words} onInputChange={onWordInputChange} />
        <Story text={selectedMadLib.getText()} />
    </div>
  );
};

export default App;
