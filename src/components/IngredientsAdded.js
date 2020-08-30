import React, {Component} from "react";

class IngredientsAdded extends Component {
    render() {
        return (
            <div className={"ingredients-added"}>
                <div className={"ingredient-card"}>
                    Mleko
                    <button type="button" className="close">
                        <span>×</span>
                    </button>
                </div>
                <div className={"ingredient-card"}>
                    Szynka
                    <button type="button" className="close">
                        <span>×</span>
                    </button>
                </div>
                <div className={"ingredient-card"}>
                    Jajka
                    <button type="button" className="close">
                        <span>×</span>
                    </button>
                </div>
                <div className={"ingredient-card"}>
                    Ser
                    <button type="button" className="close">
                        <span>×</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default IngredientsAdded;