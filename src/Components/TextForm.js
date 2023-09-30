import  React, {useState} from 'react';

export default function TextForm(props) {

  const [text, setText] = useState('');

  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const hadleLowerCaseClick = () => {
    const newText = text.toLowerCase()
    setText(newText);
  }


  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const clearText = () => {
    setText('');
  }


  function countWords  () {
    if (text === '') {
      return(0);
    }
    return (text.split(' ').length);
  }

  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" placeholder="Enter Here..."></textarea>
      </div>
      <button className="btn btn-primary mx-1 mb-1" onClick={handleUpperCaseClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-1 mb-1" onClick={hadleLowerCaseClick}>Convert To Lower Case</button>
      <button className="btn btn-danger mx-1 mb-1" onClick={clearText}>Clear Text</button>
    </div>
    <div className="container">
      <h1>Your Text Summary</h1>
      <p>{countWords()} words | {text.length} Characters | {}Without Spaces</p>
      <p>{((text.split(' ').length) / 238).toFixed(2)} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    
    </>
  );
}


