import React from "react";
import IngredientsList from "./IngredientsList"

class Main extends React.Component {
    render() {
        return (
            <div>
                <div class={"title text-center"}>
                    <h1>Na co masz ochotę?</h1>
                </div>
                <div class={"main"}>
                    <div className="md-form">
                        <input type="text" placeholder="Co masz w lodówce?" id="suffixInside" className="form-control"/>
                        <button type="button" className="btn btn-secondary">Dodaj</button>
                    </div>
                    <IngredientsList />
                </div>

            </div>
        )
    }
}

export default Main;