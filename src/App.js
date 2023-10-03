import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert.js'


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(33, 37, 41)';
      document.body.style.color = 'white';
      document.getElementsByClassName('navbar')[0].style.borderBottom = '1px solid white';
      document.getElementsByClassName('text-area')[0].style.backgroundColor = 'rgb(33, 37, 41)';
      document.getElementsByClassName('text-area')[0].style.color = 'white';
      showAlert('Dark Mode has been enabled!', 'success');
      document.title = 'TextUtils - HOME (Dark Mode)';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'rgb(248, 249, 250)';
      document.body.style.color = 'black';
      document.getElementsByClassName('navbar')[0].style.borderBottom = '1px solid rgb(33, 37, 41)';
      document.getElementsByClassName('text-area')[0].style.background = 'white';
      document.getElementsByClassName('text-area')[0].style.color = 'black';
      showAlert('Light Mode has been enabled!', 'success');
      document.title = 'TextUtils - HOME (Light Mode)';

    }
  }
  const customMode = () => {
    const colorValue = document.getElementsByClassName('color-pallete')[0];
    document.body.style.backgroundColor = colorValue.value;
    document.title = 'TextUtils - HOME (Custom Mode)';
    setInterval(() => {
      document.title = 'Customize Your Theme!';
    }, 2000);
    setInterval(() => {
      document.title = 'TextUtils - HOME (Custom Mode)';
    }, 1500);
    showAlert('Custom Mode Applied!', 'success');
  }
  return (
    <>
      <Navbar title="TextUtils" placeholder="Search" mode={mode} toggleMode={toggleMode} customMode={customMode} />
      <Alert alert={alert} />
      <div className="container my-3 mb-5">
        <TextForm heading="Enter Text to analyze" mode={mode} showAlert={showAlert} />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
