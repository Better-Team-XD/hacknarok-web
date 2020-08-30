import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";

class LandingPage extends React.Component {
    render() {
        return (
            <div className={"container landing-page"}>
                <Navbar />
                <Main />
            </div>
        )
    }
}

export default LandingPage;