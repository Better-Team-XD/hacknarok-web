import React from "react";

class Recipe extends React.Component {
    render() {
        return (
            <div className="recipe">
                <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                    <img className={"recipe-img"} src={this.props.imageUrl} alt="recipe" />
                    <div className={"recipe-name"}>{this.props.name}</div>
                    <div className={"recipe-details"}>Brakuje Ci {this.props.missing} składników </div>
                </a>
            </div>
        )
    }
}

export default Recipe;