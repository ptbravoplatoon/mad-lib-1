import React from 'react';

const MadLibSelector = (props) => {

  const listMadLibsAsOptions = () => {
    return props.madlibs.map( (madlib, i) => {
      return <option key={`option-${i}`} value={i}>{madlib.title}</option>
    })
  }

  const handleSelectChange = (event) => {
    props.handleMadLibChange(event)
  }


  return (
    <div>
      <label for="MLSelector">Choose a Mad Lib:</label>
        <select name="MLSelector" id="MLSelector" onChange={handleSelectChange}>
          {listMadLibsAsOptions()}
        </select>
    </div>
  );
};

export default MadLibSelector;