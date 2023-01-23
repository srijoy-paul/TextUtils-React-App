import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import InputText from './InputText';
import React, { useState } from "react";
import Alert from './Alert';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";
import About from './About';


function App() {
  const [colorMode, setColorMode] = useState({
    color: "#2C3333",
    backgroundColor: "white"
  });
  const [btnText, setBtnText] = useState("Enable DarkMode");
  const [alert, setAlert] = useState({
    Mssg: null,
    type: null
  });
  // const titleExamp = "React Project2";

  const showAlert = (Message, alertType) => {
    setAlert({
      Mssg: Message,
      type: alertType,
    });
    setTimeout(() => {
      setAlert({
        Mssg: null,
        type: null
      });
    }, 2000);
  }

  const toggleMode = (color, bgColor) => {
    if (colorMode.backgroundColor === "#2C3333") {
      setColorMode({
        color: "#2C3333",
        backgroundColor: "white"
      })
      setBtnText("Enable DarkMode");
    }
    else {
      setColorMode({
        color: "white",
        backgroundColor: "#2C3333"
      })
      setBtnText("Disable DarkMode");
    }
  }

  return (
    <Router>
      <Navbar />
      <div style={{ height: "100vh" }}>
        <div style={{ ...colorMode, height: "100%" }}>

          <Alert alertType={alert.type} alertMssg={alert.Mssg} />
          <div className='container d-flex justify-content-end align-items-center'>

            {/* <button className="btn btn-success my-3" onClick={toggleMode}>{btnText}</button> */}
            <div className="form-check form-switch mx-3 my-3 d-flex align-items-center gap-2" onClick={toggleMode}>
              <input className="form-check-input align-self-center" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label align-self-center" htmlFor="flexSwitchCheckDefault">{btnText}</label>
            </div>
          </div>

          <Routes> {/* Basically switch ensures that only one route is active */}
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<InputText showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div >
      </div>
    </Router>


  );
}

export default App;
