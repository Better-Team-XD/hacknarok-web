import React, {Component} from "react";

class IngredientsList extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        Ser
                        <button type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </li>
                    <li className="list-group-item">
                        Szynka
                        <button type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </li>
                    <li className="list-group-item">
                        Pieczarki
                        <button type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default IngredientsList;