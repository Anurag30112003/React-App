import React, { useState } from 'react'
import mygif from "../img/load.gif";

export default function Textinput(props) {
    
    const [text,SetText] = useState('')

    const ChangeTextUpper = () => {
        let New = text.toUpperCase();
        SetText(New)
        let status = document.getElementById("result");
        status.style.border = "2px solid black";
        status.style.background = "#ff0000";
        status.innerHTML = "Text Changed to Upper Case"
        setTimeout(() => {
            status.innerHTML = ""
            status.style.border = "none";
            status.style.background = "none";
        }, 1600)
    }
    const ChangeTextLower = () => {
        let New = text.toLowerCase();
        SetText(New);
        let status = document.getElementById("result");
        status.style.border = "2px solid black";
        status.style.background = "#ff0000";
        status.innerHTML = "Text Changed to Lower Case"
        setTimeout(() => {
            status.innerHTML = "";
            status.style.border = "none";
            status.style.background = "none";
        }, 1600)
    
    }

    const changeHandle = (event) => {
        SetText(event.target.value)
    }

    const ClearText = () => {
        SetText('')
        let status = document.getElementById("result");
        status.style.border = "2px solid black";
        status.style.background = "#ff0000";
        status.innerHTML = "Text Cleared"
        setTimeout(() => {
            status.innerHTML = ""
            status.style.border = "none";
            status.style.background = "none";
        }, 1600)
    }

    const CopyText = () => {
        let txt = document.getElementById("usertext");
        txt.select();
        document.execCommand("copy");
        let status = document.getElementById("result");
        status.style.border = "2px solid black";
        status.style.background = "#ff0000";
        status.innerHTML = "Text Copied"
        setTimeout(() => {
            status.innerHTML = ""
            status.style.border = "none";
            status.style.background = "none";
        }, 1600)
    }


    return (
        <div>
            <h1 id="head">
                📝{props.heading}📝
            </h1>
            <div className="anime">
                <img id="mycss" src={mygif} alt="gif" />
            </div>
            <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label" id="type">Type Below:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="16" id="usertext" value={text} onChange={changeHandle}></textarea>
                <button id="mybtn" onClick={ChangeTextUpper}>Convert to Upper</button>
                <button id="mybtn" onClick={ChangeTextLower}>Convert to Lower</button>
                <button id="mybtn" onClick={ClearText}>Clear text</button>
                <button id="mybtn" onClick={CopyText}>CopyText</button>
                <p id="type2">Status</p>
                <p id="result"></p>
        </div>
    </div>
    )
}

