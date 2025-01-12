import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = () => {
        // console.log("Capitalize"+text)
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to upper case","success");
      };
    const handleLoClick = () => {
        // console.log("Capitalize"+text)
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lower case","success");
      };
    const handleClearClick = () => {
        // console.log("Capitalize"+text)
        
        setText("");
        props.showAlert("Text Area Cleared","success");
      };
    const handleCopyClick = () => {
        // console.log("Capitalize"+text)
        
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied to clipboard","success");
      };
    const handleRemoveExtraSpaceClick = () => {
        // console.log("Capitalize"+text)
        
        let newText= text.replace(/\s{2,}|\t|\n/g," ");
        setText(newText);
        props.showAlert("Removed all the extra spaces","success");
      };
    const addText = (event) => {
        // console.log("editText");
        setText(event.target.value);
      };
    
      
  return (
    <>
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        <h3>{props.heading}</h3>
      </label>
      <textarea  className={`form-control bg-${props.mode} text-${props.textMode}`} placeholder="Enter your text here" value={text} onChange={addText} id="exampleFormControlTextarea1" rows="8"></textarea>
      <div className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</div>      
      <div className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lowercase</div>      
      <div className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</div>      
      <div className="btn btn-primary my-2 mx-2" onClick={handleCopyClick}>Copy Text</div>      
      <div className="btn btn-primary my-2 mx-2" onClick={handleRemoveExtraSpaceClick}>Remove Extra Spaces</div>      
    </div>
    <div className="h3 my-4">Your text Summary</div>
    <p>Your text has {text.trim().length===0? 0 :text.trim().split(/\s+/).length} words and {text.length} characters</p>
    </>
  );
}
