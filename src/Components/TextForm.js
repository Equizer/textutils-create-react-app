import  React, {useState} from 'react';

export default function TextForm(props) {

  const [text, setText] = useState('');

  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text Converted to Upper Case!', 'success');
  }

  const hadleLowerCaseClick = () => {
    const newText = text.toLowerCase()
    setText(newText);
    props.showAlert('Text Converted to Lower Case!', 'success');

  }


  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const clearText = () => {
    setText('');
    props.showAlert('Text Area Cleared!', 'danger');

  }

  const copyText = () => {
    navigator.clipboard.writeText(`${text}`);
    props.showAlert('Copied to clipboard!', 'success');

  }

  const pasteText = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText(`${text}${clipboardText}`); //this will add the pasted text to text and display rather than clearing the text and set it to the text in the clipboard
      props.showAlert('Text Pasted!', 'info');
    
    });
  }
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra Spaces Removed!', 'warning');

  } 


  // function countWords  () {
  //   if (text === '') {
  //     return(0);
  //   }
  //   return (text.split(' ').length);
  // }


  function countWords  () {
    if (text === '') {
      return (0);
    }
    return text.split(' ').length;
  }

  return (
    <>
    <div>
      <h1 style={{color: props.mode === 'dark' ? 'cyan' : 'black'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control text-area" value={text} onChange={handleOnChange} id="myBox" rows="10" placeholder="Enter Here..."></textarea>
      </div>
      <button className="btn btn-primary mx-1 mb-1" onClick={handleUpperCaseClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-1 mb-1" onClick={hadleLowerCaseClick}>Convert To Lower Case</button>
      <button className="btn btn-danger mx-1 mb-1" onClick={clearText}>Clear Text</button>
      <button className="btn btn-warning mx-1 mb-1" onClick={copyText}>Copy Text</button>
      <button className="btn btn-warning mx-1 mb-1" onClick={pasteText}>Paste Text</button>
      <button className="btn btn-warning mx-1 mb-1" onClick={removeExtraSpaces}>Remove extra spaces</button>
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
