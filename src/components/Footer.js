import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className={"page-footer font-small fixed-bottom "}>
                <div className="footer-copyright text-center text-white py-3">
                    <a href={"https://github.com/Better-Team-XD"}>Created by Team XD</a>
                </div>
            </div>
        )
    }
}

export default Footer;