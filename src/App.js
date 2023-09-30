
import './App.css';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" placeholder="Search" />
      <div className="container my-3">
      <TextForm heading="Enter Text to analyze" />
      </div>
    </>
  );
}

export default App;
