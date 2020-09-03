import React from "react";
import logo from '../images/github.png';

class Navbar extends React.Component {
    render() {
        return (
            <div >
                <nav className="navbar navbar-inverse ">

                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">
                                   XD Eats
                            </a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="https://github.com/Better-Team-XD" target="_blank" rel="noopener noreferrer">
                                <img className={"github-logo"} src={logo} alt="github-logo"/>
                            </a></li>
                        </ul>

                </nav>
            </div>
        )
    }
}

export default Navbar;