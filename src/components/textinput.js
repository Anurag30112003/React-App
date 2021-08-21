import React, { useState } from 'react'


export default function Textinput(props) {
    
    const [text,SetText] = useState('')

    const ChangeTextUpper = () => {
        let New = text.toUpperCase();
        SetText(New)
        let status = document.getElementById("result");
        status.innerHTML = "Text Changed to Upper Case"
        setTimeout(() => {
            status.innerHTML = ""
        }, 1600)
    }
    const ChangeTextLower = () => {
        let New = text.toLowerCase();
        SetText(New);
        let status = document.getElementById("result");
        status.innerHTML = "Text Changed to Lower Case"
        setTimeout(() => {
            status.innerHTML = ""
        }, 1600)
    
    }

    const changeHandle = (event) => {
        SetText(event.target.value)
    }

    const ClearText = () => {
        SetText('')
        let status = document.getElementById("result");
        status.innerHTML = "Text Cleared"
        setTimeout(() => {
            status.innerHTML = ""
        }, 1600)
    }

    const CopyText = () => {
        let txt = document.getElementById("usertext");
        txt.select();
        document.execCommand("copy");
        let status = document.getElementById("result");
        status.innerHTML = "Copied"
        setTimeout(() => {
            status.innerHTML = ""
        }, 1600)
    }


    return (
        <div>
            <h1>
                {props.heading}
            </h1>
            <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Type Below:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" id="usertext" value={text} onChange={changeHandle}></textarea>
                <button className="btn btn-primary my-2" onClick={ChangeTextUpper}>Click to Upper</button>
                <button className="btn btn-primary mx-2" onClick={ChangeTextLower}>Click to Lower</button>
                <button className="btn btn-primary mx-2" onClick={ClearText}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={CopyText}>CopyText</button>
                <p>Status</p>
                <p id="result"></p>
        </div>
    </div>
    )
}

