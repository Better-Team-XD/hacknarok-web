import React, {Component} from "react";

class IngredientsAdded extends Component {
    render() {
        return (
                <div className={"ingredient-card"}>
                    {this.props.ingredient.name}
                    <button type="button" className="close" onClick={() => this.props.action(this.props.ingredient._id)}>
                        <span>×</span>
                    </button>
                </div>
        )
    }
}

export default IngredientsAdded;