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


  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" placeholder="Enter Here..."></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpperCaseClick}>Convert to Upper Case</button>
    </div>
  );
}


