import React from "react";
import IngredientsList from "./IngredientsList";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            ingredients: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/v1/ingredients")
            .then(response => response.json())
            .then(data => this.setState({
                ingredients: data
            }))
            .then(() => console.log(this.state))
    }

    render() {
        return (
            <div>
                <div className="md-form">
                    <input type="text" placeholder="Co masz w lodówce?" id="suffixInside" className="form-control"/>
                    <button type="button" className="btn btn-secondary">Dodaj</button>
                </div>
                <IngredientsList />
            </div>
        )
    }
}
export default Form;