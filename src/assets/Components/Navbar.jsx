import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img
                    src="https://lms.achieversit.com/assets/images/logo.png"
                    style={{ height: "40px", width: "100px", }}
                    alt=""
                 
                />


                <Link className="navbar-brand" to="/">Navbar</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link to="/statusmsg" className="nav-link active">StatusMessage</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/todo" className="nav-link">ToDoList</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/colorchange" className="nav-link">Color</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;