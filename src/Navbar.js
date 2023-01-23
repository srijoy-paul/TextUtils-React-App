import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand ms-2" to="/">TextUtils</Link>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li> */}
                </ul>
                <div className="container d-flex justify-content-end gap-2">

                    <button className="btn btn-primary my-2" type="submit"></button>
                    <button className="btn btn-warning my-2" type="submit"></button>
                    <button className="btn btn-success my-2" type="submit"></button>
                    <button className="btn btn-info my-2" type="submit"></button>
                </div>

                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>);
}

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired
// }
