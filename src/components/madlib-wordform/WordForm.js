import React, { Component } from 'react'
import './WordForm.css'

const WordForm = (props) => {

  const onInputChange = (event, key, index) => {
    props.onInputChange(key, event.target.value, index)
  }

  const displayWords = () => {
    const fields = props.words.map( (word, i) => {
      return <label key={word.key}  onChange={ (e) => onInputChange(e, word.key, i)}>{word.label}<input type="text" /><br /></label>
    })
    return fields
  }

  return (
    <div>
      {displayWords()}
    </div>
  );
};

// class WordForm extends Component {
//   onInputChange(key, index, event) {
//     this.props.onInputChange(key, event.currentTarget.value, index)
//   }
//   render() {
//     return (
//       <div></div>
//     )
//   }
// }

export default WordForm
