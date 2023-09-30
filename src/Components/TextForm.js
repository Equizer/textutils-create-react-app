import  React, {useState} from 'react';

export default function TextForm(props) {

  const [text, setText] = useState("It's a sunny day!");

  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const hadleLowerCaseClick = () => {
    const newText = text.toLowerCase()
    setText(newText);
  }

  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" placeholder="Enter Here..."></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpperCaseClick}>Convert to Upper Case</button>
      <button className="btn btn-primary" onClick={hadleLowerCaseClick}>Convert To Lower Case</button>
    </div>
    <div className="container">
      <h1>Your Text Summary</h1>
      <p>{text.split(' ').length} words | {text.length} Characters</p>
      <p>{((text.split(' ').length) / 238).toFixed(2)} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    
    </>
  );
}


