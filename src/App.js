import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"
import InputText from './InputText';
import React, { useState } from "react";
import Alert from './Alert';


function App() {
  const [colorMode, setColorMode] = useState({
    color: "#2C3333",
    backgroundColor: "white"
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");
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
      <div style={{ ...colorMode, height: "100%" }}>

        < Navbar />
        <Alert alertType={alert.type} alertMssg={alert.Mssg} />
        <div className='container d-flex justify-content-end align-items-center'>

          {/* <button className="btn btn-success my-3" onClick={toggleMode}>{btnText}</button> */}
          <div className="form-check form-switch mx-3 my-3 d-flex align-items-center gap-2" onClick={toggleMode}>
            <input className="form-check-input align-self-center" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label align-self-center" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
        </div>
        <InputText showAlert={showAlert} />
      </div>

    </>
  );
}

export default App;
