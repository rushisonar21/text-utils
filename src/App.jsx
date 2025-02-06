import { useEffect, useState } from 'react'

import Navbar from './Navbar'
import Textform from './Textform'
import Alert from './Alert';

function App() {
  const [mode, setMode] = useState("Light");
  const [alert, setAlert] = useState(null);
  const updateAlert = (msg,type)=>{
    setAlert({
      "msg": msg,
      "type": type
    });

    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const changeMode = ()=>{
    if(mode==="Light"){
        setMode("Dark");
        document.body.style.backgroundColor = "Black"
        document.body.style.color = "White"
        updateAlert("Dark Mode Enabled","success");
        
    }
    else{
        setMode("Light");
        document.body.style.backgroundColor = "White"
        document.body.style.color = "Black"
        updateAlert("Light Mode Enabled","success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" about="About Us" mode = {mode} changeMode = {changeMode} />
      <Alert alert={alert}></Alert>
      <Textform heading="Enter your text below" updateAlert = {updateAlert} mode = {mode}/>
    </>
  )
}

export default App
