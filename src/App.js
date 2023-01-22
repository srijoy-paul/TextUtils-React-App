import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import InputText from './InputText';
import React, { useState } from "react";


function App() {
  const [colorMode, setColorMode] = useState({
    color: "#2C3333",
    backgroundColor: "white"
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  // const titleExamp = "React Project2";

  const toggleMode = () => {
    if (colorMode.backgroundColor === "#2C3333") {
      setColorMode({
        color: "#2C3333",
        backgroundColor: "white"
      })
      setBtnText("Enable Dark Mode");
    }
    else {
      setColorMode({
        color: "#E5E5CB",
        backgroundColor: "#2C3333"
      })
      setBtnText("Disable Dark Mode");
    }
  }

  return (
    <>
      <div style={colorMode}>

        < Navbar />
        <div className='container d-flex justify-content-end align-items-center'>

          <button className="btn btn-success my-3" onClick={toggleMode}>{btnText}</button>
        </div>
        <InputText />
      </div>

    </>
  );
}

export default App;
