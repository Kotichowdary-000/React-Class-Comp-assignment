import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";

const Navbar = () => {
    const [theme, themeChanger] = useContext(ThemeContext);
    console.log(theme);

    return (
        <nav className={`navbar navbar-expand-lg ${theme === "light" ? "navbar-light bg-light" : "navbar-dark bg-dark"}`}>

            <div className="container-fluid">

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
                        <button
                            onClick={themeChanger}
                            className={`btn ${theme === "light" ? "btn-outline-dark" : "btn-outline-light"} ms-3`}
                        >
                            Switch to {theme === "light" ? "dark" : "light"}
                        </button>


                        {/* <li className="nav-item">
                            <Link to="/custohook" className="nav-link">Custom Hook</Link>
                        </li> */}


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;