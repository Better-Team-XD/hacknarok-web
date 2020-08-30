import React, {Component} from "react";
import image  from '../images/test.jpg';

class Recipes extends Component {
    render() {
        return (
            <div className="container">



                <div className={"recipes-container"}>
                    <div className="recipe">
                        <a href="#">
                            <img className={"recipe-img"} src={image} alt="recipe" />
                            <div className={"recipe-name"}>Tytuł przepisu</div>
                            <div className={"recipe-details"}>Dopasowanie</div>
                        </a>
                    </div>
                    <div className="recipe">
                        <a href="#">
                            <img className={"recipe-img"} src={image} alt="recipe" />
                            <div className={"recipe-name"}>Tytuł przepisu</div>
                            <div className={"recipe-details"}>Dopasowanie</div>
                        </a>
                    </div>
                    <div className="recipe">
                        <a href="#">
                            <img className={"recipe-img"} src={image} alt="recipe" />
                            <div className={"recipe-name"}>Tytuł przepisu</div>
                            <div className={"recipe-details"}>Dopasowanie</div>
                        </a>
                    </div>
                    <div className="recipe">
                        <a href="#">
                            <img className={"recipe-img"} src={image} alt="recipe" />
                            <div className={"recipe-name"}>Tytuł przepisu</div>
                            <div className={"recipe-details"}>Dopasowanie</div>
                        </a>
                    </div>
                    <div className="recipe">
                        <a href="#">
                            <img className={"recipe-img"} src={image} alt="recipe" />
                            <div className={"recipe-name"}>Tytuł przepisu</div>
                            <div className={"recipe-details"}>Dopasowanie</div>
                        </a>
                    </div>
                    <div className="recipe">
                        <a href="#">
                            <img className={"recipe-img"} src={image} alt="recipe" />
                            <div className={"recipe-name"}>Tytuł przepisu</div>
                            <div className={"recipe-details"}>Dopasowanie</div>
                        </a>
                    </div>
                </div>


            </div>

        )
    }
}

export default Recipes;