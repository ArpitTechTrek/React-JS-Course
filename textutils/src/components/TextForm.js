import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearText = () => {
        let newText = ("");
        setText(newText);
    }

    const handleReverse = ()=> {
        let newText = text.split('').reverse().join('');
        setText(newText)
    }

    const handleCapitaliseFirstLetter = () =>{
        let newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase()+ word.slice(1)).join(' ');
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container my-3'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-success mx-2" onClick={handleUpClick}>Covert to Uppercase</button>
                <button className="btn btn-success mx-2" onClick={handleLoClick}>Covert to Lowercase</button>
                <button className="btn btn-success mx-2" onClick={handleCapitaliseFirstLetter}>Capitalize First Letter</button>
                <button className="btn btn-success mx-2" onClick={handleReverse}>Reverse</button>
                <button className="btn btn-success mx-2" onClick={handleClearText}>Clear</button>
                

            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>


            </div>
        </>
    )
}
