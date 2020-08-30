import React from "react";
import IngredientsList from "./IngredientsList"
import Form from "./Form";

class Main extends React.Component {
    render() {
        return (
            <div>
                <div class={"title text-center"}>
                    <h1>Na co masz ochotę?</h1>
                </div>
                <div class={"main"}>

                    <Form />
                </div>

            </div>
        )
    }
}

export default Main;