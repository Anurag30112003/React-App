import React, { useState } from 'react'


export default function Textinput(props) {

    const ChangeText = () => {
        let New = text.toUpperCase();
        SetText(New)
    }

    const changeHandle = (event) => {
        SetText(event.target.value)
    }
    const [text,SetText] = useState('')
    return (
        <div>
            <h1>
                {props.heading}
            </h1>
            <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Type Below:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" value={text} onChange={changeHandle}></textarea>
                <button className="btn btn-primary my-2" onClick={ChangeText}>Click to Upper</button>
        </div>
    </div>
    )
}

