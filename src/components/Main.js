import React from "react";
import Form from "./Form";
import Recipe from "./Recipe";
import Footer from "./Footer";

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            htmlList: []
        }
        this.action = this.action.bind(this)

    }

    action(elements){
        let ingredients = elements.filter(element => element !== "").map(element => element.props.name)
        let data = {
            ingredients: ingredients,
            category: "Śniadanie"
        }
        fetch("http://35.228.89.132/api/v1/matches", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => this.setState({
                htmlList: data.map(element => <Recipe name={element.name} url={element.url} imageUrl={element.imgUrl} missing={element.missing} />).slice(0,5)
            }))
    }

    render() {
        return (
            <div>
                <div className={"title text-center"}>
                    <h1>Na co masz ochotę?</h1>
                </div>
                <div className={"main"}>

                    <Form onAction={this.action}/>

                    <div className={"container"}>
                        <div className={"recipes-container"} style={{marginTop: "15%"}}>
                            {this.state.htmlList}
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Main;