import React from "react";
import logo  from '../images/logo3.png';
import { ReactComponent as User } from '../images/user.svg';
import { ReactComponent as NewUser } from '../images/new-user.svg';

class Navbar extends React.Component {
    render() {
        return (
            <div >
                <nav className="navbar navbar-inverse ">

                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                {/*<img src={logo} alt={"logo"}/>*/}
                                   XD Eats
                            </a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            {/*<li><a href="#"><NewUser /></a></li>*/}
                            <li><a href="#"><User /></a></li>
                        </ul>

                </nav>
            </div>
        )
    }
}

export default Navbar;