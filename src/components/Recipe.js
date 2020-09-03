import React from "react";

class Recipe extends React.Component {
    render() {
        return (
            <div className="recipe">
                <a href={this.props.recipe.url} target="_blank" rel="noopener noreferrer">
                    <img className={"recipe-img"} src={this.props.recipe.imageUrl} alt="recipe" />
                    <div className={"recipe-name"}>{this.props.recipe.name}</div>
                    <div className={"recipe-details"}>Brakuje Ci {this.props.recipe.missing} składników </div>
                </a>
            </div>
        )
    }
}

export default Recipe;