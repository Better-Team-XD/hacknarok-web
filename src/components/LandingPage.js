import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";

class LandingPage extends React.Component {
    render() {
        return (
            <div className={"container"}>
                <Navbar />

                <Main />
                <Footer />
            </div>
        )
    }
}

export default LandingPage;