import React from "react";

class AutoCompleteListElement extends React.Component {
    render() {
        return (
            <div onClick={() => this.props.action(this.props.ingredient)}>
                <li className="list-group-item">
                    {this.props.ingredient.name}
                </li>
            </div>
        )
    }
}

export default AutoCompleteListElement