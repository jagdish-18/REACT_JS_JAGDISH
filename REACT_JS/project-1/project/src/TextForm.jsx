import React , {useState}  from "react";


const TextForm = (props) => {
    const handleUpClick = () =>{
        // console.log("uppercase wos clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleLowClick = () =>{
        // console.log("uppercase wos clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleClearClick = () =>{
        let newtext = '';
        setText(newtext)
    }
    

    const handleOnChange = (event) =>{
        // console.log("on change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
     <>
        <div className="container">
            <div className="mb-3">
                <h1>{props.heading} </h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="textbox" rows="8"></textarea>
                <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mt-3 ms-4" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mt-3 ms-4" onClick={handleClearClick}>Clear Text</button>
            </div>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} word and {text.length} characters</p>
            <p>{ 0.008 * text.split(" ").length} Minutes read </p>
            <h2>preview</h2>
            <p>{text}</p>
        </div>
    </> 
    );
};

export default TextForm;
