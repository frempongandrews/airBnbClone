import React from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="header">
            <nav className='navbar navbar-dark navbar-expand-lg' style={{backgroundColor: "#696969"}}>
                <div className='container'>
                    <Link to="/" className='navbar-brand'>BookWithMe</Link>
                    <form className='form-inline my-2 my-lg-0'>
                        <input className='form-control mr-sm-2 bwm-search' type='search' placeholder='Try New York' aria-label='Search'></input>
                        <button className='btn btn-outline-success my-2 my-sm-0 btn-bwm-search' type='submit'>Search</button>
                    </form>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                        <div className='navbar-nav ml-auto'>
                            <Link to="/login" className='nav-item nav-link active' href=''>Log In <span className='sr-only'>(current)</span></Link>
                            <Link to="/signup" className='nav-item nav-link' href=''>Sign up</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header;