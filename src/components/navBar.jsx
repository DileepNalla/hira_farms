import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import { Link, NavLink } from 'react-router-dom';
class Navbar extends Component {
    state = {}
    render() {
        return (

            <React.Fragment>
                <nav className="navbar navbarheader navbar-expand-lg navbar-dark ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Mahi Farms Pvt Ltd.</a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">

                            <ul className="navbar-nav nav-tabs">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/orders">Order</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/aboutUs">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/admin">Admin</Link>
                                </li>

                                <div>
                                    <Link className="nav-link" to="/login">Login</Link>
                                </div>

                                <div>
                                    <Link className="nav-link" to="/subscribe">Subscribe</Link>
                                </div>
                            </ul>

                        </div>
                    </div>
                </nav>
            </React.Fragment>

        );
    }
}

export default Navbar;
