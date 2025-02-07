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
    navigator.clipboard.writeText(text)
    props.updateAlert("Content copied to clipboard","success")
  }

  return (<>
    <div className="mb-3 container d-flex flex-column my-2">
        <h4>{props.heading}</h4>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='Dark'?'#5b5474':'white', color:props.mode==='Dark'?'white':'black'}} id="exampleFormControlTextarea1" value={text} rows="8" placeholder='Enter Text' onChange={updatePara}></textarea>
        </div>
        <div className='Controls container d-flex justify-content-evenly flex-wrap'>
        <button className="btn btn-primary my-2" onClick={convertToUpper} disabled={((text.split(/\s+/)).filter(
          (val)=>{return val.length!=0;})).length>0?false:true}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={convertToLower} disabled={((text.split(/\s+/)).filter(
          (val)=>{return val.length!=0;})).length>0?false:true}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={Capitalize} disabled={((text.split(/\s+/)).filter(
          (val)=>{return val.length!=0;})).length>0?false:true}>Capitalize</button>
        <button className="btn btn-primary mx-2 my-2" onClick={speak} disabled={((text.split(/\s+/)).filter(
          (val)=>{return val.length!=0;})).length>0?false:true}>Speak</button>
        <button className="btn btn-primary mx-2 my-2" onClick={copy} disabled={((text.split(/\s+/)).filter(
          (val)=>{return val.length!=0;})).length>0?false:true}>Copy</button>
        <button className="btn btn-danger mx-2 my-2" onClick={clearText} disabled={((text.split(/\s+/)).filter(
          (val)=>{return val.length!=0;})).length>0?false:true}>Clear Text</button>
        </div>
    </div>
    <div className='my-5 container d-flex flex-column'>
      <h4>Text Summary</h4>
      <p className='container my-3'>Your text container {((text.split(/\s+/)).filter((val)=>{
        return val.length!=0;
      })).length} words and {text.length} chars</p>
      <h4>Preview</h4>
      <p style={{backgroundColor: props.mode==='Dark'?'#5b5474':'white', color:props.mode==='Dark'?'white':'black'}} className='container my-3 form-control' >{((text.split(/\s+/)).filter(
          (val)=>{return val.length!=0;})).length>0?text:"Enter something to preview"}</p>
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

