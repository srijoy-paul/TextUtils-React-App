import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import InputText from './InputText';


function App() {
  const titleExamp = "React Project2";
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Enter your text here: </h1>
        <InputText />
        <button className='btn btn-primary'>Convert Uppercase</button>
      </div>
    </>
  );
}

export default App;
