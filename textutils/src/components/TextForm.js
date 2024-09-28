import React, { useState } from 'react'

export default function TextForm(props) {
    console.log("Current mode:", props.mode);

    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Upper case!", "success");
    }

    const handleLoClick = () => {
        console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lower case!", "success");

    }

    const handleClearText = () => {
        let newText = ("");
        setText(newText);
        props.showAlert("Text has been cleared!", "success");

    }

    const handleReverse = () => {
        let newText = text.split('').reverse().join('');
        setText(newText)
        props.showAlert("Text converted to Reverse!", "success");

    }

    const handleCapitaliseFirstLetter = () => {
        let newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
        props.showAlert("First Letter of your text has been capitalized!", "success");

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
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }} id="myBox" rows="8"></textarea>
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
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>


            </div>
        </>
    )
}
