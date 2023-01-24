import React, { useState } from "react";
export default function InputText(props) {
    const [text, setText] = useState("");
    const [preview, setPreview] = useState("");
    const handleClickUppercase = () => {
        const convertInUpperCase = text.toUpperCase();
        text !== "" ? setText(convertInUpperCase) : props.showAlert("Your text box is empty.", "danger");
    }
    const handleClickPreview = () => {
        if (text !== "") {
            setPreview(text);
            props.showAlert("Preview Successful", "success")
                ;
        }
        else props.showAlert("Your text box is empty.", "danger");

    }
    const handleClickClear = () => {
        if (text !== "") { setText(""); props.showAlert("Your text has been deleted.", "success"); } else props.showAlert("Your text box is empty.", "danger");

    }
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleCopy = () => {
        if (document.getElementById("preview").textContent !== "")
            navigator.clipboard.writeText(text).then((success) => props.showAlert("Text copied!", "success"), (error) => console.log("Error Copying text")); //using the navigator clipboard api is an async operation - so once the text is copied successfully on the clipboard then the promise resolves or else if there is any problem in doing that it rejects the promise
        else {
            props.showAlert("Preview is not done yet", "danger")
        }
    }
    return (
        <>
            <div className="container">
                <h1>Enter your text here: </h1>
                <div className="mb-3">
                    <textarea onChange={handleChange} value={text} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button className='btn btn-success me-2 my-1' onClick={handleClickUppercase}>Convert Uppercase</button>
                <button className='btn btn-success me-2 my-1' onClick={handleClickPreview}>Preview</button>
                <button className='btn btn-danger me-2 my-1' onClick={handleClickClear}>Clear Box</button>
            </div>
            <div className="container mt-3">
                <h2>Your text summary</h2>
                <p><span>{text !== "" ? text.split(" ").length : 0}</span> Words, <span>{text.length}</span> Characters.</p>
                <p>{text !== "" ? (0.008 * (text.split(" ").length)).toFixed(3) : 0} minutes read</p>
                <p></p>
            </div>
            <div className="container preview d-flex flex-column position-relative">
                <h2>Text Preview</h2>
                <button onClick={handleCopy} className="btn btn-success align-self-end position-absolute">Copy</button>
                <p id="preview" className="shadow-sm p-3 mb-5 bg-body rounded" style={{ color: "#2C3333", backgroundColor: "#395B64" }}>{preview}</p>
            </div>
        </>);
}