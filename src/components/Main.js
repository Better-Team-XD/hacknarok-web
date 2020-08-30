import React from "react";
import Form from "./Form";

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className={"title text-center"}>
                    <h1>Na co masz ochotę?</h1>
                </div>
                <div className={"main"}>

                    <Form />
                </div>
                <div className={"search-btn"}>
                    <button type="button" className="btn btn-primary">Szukaj</button>
                </div>
            </div>
        )
    }
}

export default Main;