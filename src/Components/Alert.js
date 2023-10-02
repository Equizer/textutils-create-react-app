import React from 'react'

export default function Alert(props) {
  const capitalize = (word) => {
    // This React.js code defines a capitalize function that takes a word as input. It converts the word to lowercase, then capitalizes the first letter and returns the modified word.
    const lower = word.toLowerCase();
    return `${lower.charAt(0).toUpperCase()}${lower.slice(1)}`;
  }
  return (
    // here if the props.alert is null it will return there and wouldnt proceed to compile as we used && 
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
    </div>
  )
}
