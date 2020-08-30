import React from "react";

class AutoCompleteListElement extends React.Component {
    render() {
        return (
            <a onClick={() => this.props.action(this.props.name)}>
                <li className="list-group-item">
                    {this.props.name}
                </li>
            </a>
        )
    }
}

export default AutoCompleteListElement