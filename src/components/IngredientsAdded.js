import React, {Component} from "react";

class IngredientsAdded extends Component {
    render() {
        return (
                <div className={"ingredient-card"}>
                    {this.props.name}
                    <button type="button" className="close" onClick={() => this.props.onDelete(this.props.index)}>
                        <span>×</span>
                    </button>
                </div>
        )
    }
}

export default IngredientsAdded;