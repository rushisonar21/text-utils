import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

function Textform(props) {
  let [text,setText] = useState("");

  let updatePara = (e)=>{
    setText(e.target.value)
  }
  let convertToUpper = ()=>{
      setText(text.toUpperCase());
      props.updateAlert("Convereted to Uppercase","success")
  }

  let convertToLower = ()=>{
    setText(text.toLowerCase());
    props.updateAlert("Convereted to Lowercase","success")
  }

  let clearText = ()=>{
    setText("");
    props.updateAlert("Text cleared","danger")
  }

  let speak = (e) => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.updateAlert("Reading the text","success")
  }

  let Capitalize = ()=>{
    let newText = "";
    for(let ele of text.split(" ")){
      ele = ele.charAt(0).toUpperCase() + ele.slice(1);
      newText += ele + " "
    }
    setText(newText)
    props.updateAlert("Starting letter of each word converted to capital","success")
  }

  let copy = ()=>{
    let textBox = document.querySelector("#exampleFormControlTextarea1")
    navigator.clipboard.writeText(textBox.value)
    props.updateAlert("Content copied to clipboard","success")
  }

  return (<>
    <div className="mb-3 container d-flex flex-column">
        <h4>{props.heading}</h4>
        <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="8" placeholder='Enter Text' onChange={updatePara}></textarea>
        </div>
        <div className='Controls container d-flex justify-content-evenly'>
        <button className="btn btn-primary" onClick={convertToUpper} disabled={text===""?true:false}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={convertToLower} disabled={text===""?true:false}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={Capitalize} disabled={text===""?true:false}>Capitalize</button>
        <button className="btn btn-primary mx-2" onClick={speak} disabled={text===""?true:false}>Speak</button>
        <button className="btn btn-primary mx-2" onClick={copy} disabled={text===""?true:false}>Copy</button>
        <button className="btn btn-danger mx-2" onClick={clearText} disabled={text===""?true:false}>Clear Text</button>
        </div>
    </div>
    <div className='my-5 container d-flex flex-column'>
      <h4>Text Summary</h4>
      <p className='container my-3'>Your text container {text=="" ? "0":text.split(" ").length} words and {text.length} chars</p>
      <h4>Preview</h4>
      <p className='container my-3 form-control' >{text?text:"Enter something to preview"}</p>
    </div>

  </>
    
  )
}
Textform.propTypes = {
  heading: PropTypes.string,
}
Textform.defaultProps = {
  heading: "Enter Text"
}
export default Textform;

