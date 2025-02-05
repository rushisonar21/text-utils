import PropTypes from 'prop-types'
import { useState } from 'react';
import {
    Link
   } from 'react-router-dom';


function Navbar(props){

    return (
        <nav className={`navbar navbar-expand-lg sticky-top navbar-${(props.mode==='Light'?'light':'dark')} bg-${props.mode==='Light'?'light':'dark'}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="./">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="./">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="./about">{props.about}</Link>
                </li>
            </ul>
            </div>
            <form className='d-flex'>
            {/* <div className="d-flex">
                <input className="form-check-input" type="radio" style={{backgroundColor:"#770909"}} name="flexRadioDefault" id="flexRadioDefault1" onClick={props.updateBgColor}/>
                <input className="mx-2 form-check-input" type="radio" style={{backgroundColor:"#130B51"}} name="flexRadioDefault" id="flexRadioDefault2" onClick={props.updateBgColor}/>
                <input className="mx-1 form-check-input" type="radio" style={{backgroundColor:"#364437"}} name="flexRadioDefault" id="flexRadioDefault3" onClick={props.updateBgColor}/>
            </div> */}
            <div className="nav-link form-check form-switch mx-5 d-flex">
                <label className="form-check-label" >
                <i className="fa-solid fa-sun"></i>
                </label>
                <input className="form-check-input mx-3" onClick={props.changeMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                <label className="form-check-label mx-1">
                <i className="fa-solid fa-moon"></i>
                </label>
                </div>
            </form>
        </div>
    </nav>
    );

}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string,
    mode: PropTypes.string,
    changeMode: PropTypes.func
}

Navbar.defaultProps = {
    title: "Title",
    about: "About",
    mode: "Light",
    changeMode: ()=>{
        console.log("Please pass changeMode as props")
    },
}
export default Navbar
