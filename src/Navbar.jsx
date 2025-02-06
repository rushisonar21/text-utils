import PropTypes from 'prop-types'
import { useState } from 'react';


function Navbar(props){

    return (
        <nav className={`navbar navbar-expand-lg navbar-${(props.mode==='Light'?'light':'dark')} bg-${props.mode==='Light'?'light':'dark'}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">{props.about}</a>
                </li>
            </ul>
            </div>
            <form className='d-flex'>
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
