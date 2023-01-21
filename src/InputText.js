import React, { useState } from "react";
export default function InputText() {
    const [text, setText] = useState("");
    const handleClick = () => {
        const convertInUpperCase = text.toUpperCase();
        text != "" ? setText(convertInUpperCase) : alert("Input Box is empty")
    }
    const handleChange = (e) => {
        setText(e.target.value);
    }
    return (
        <div className="container">
            <h1>Enter your text here: </h1>
            <div className="mb-3">
                <textarea onChange={handleChange} value={text} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleClick}>Convert Uppercase</button>
        </div>);
}