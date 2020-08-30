import React from "react";
import Form from "./Form";
import Recipes from "./Recipes";

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className={"title text-center"}>
                    <h1>Na co masz ochotę?</h1>
                </div>
                <div className={"main"}>

                    <Form />
                    <Recipes />
                </div>

            </div>
        )
    }
}

export default Main;