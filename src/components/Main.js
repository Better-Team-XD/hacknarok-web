import React from "react";
import Form from "./Form";
import Recipe from "./Recipe";
import {host} from "./Host"

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            recipes: []
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(ingredients){
        const data = {
            ingredients: ingredients.map(ingredient => ingredient.name),
            category: "Śniadanie"
        }

        fetch(`${host}api/v1/matches`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => this.setState({
                recipes: data.content
            }))
    }

    render() {
        const htmlList = this.state.recipes.map(
            recipe => <Recipe recipe={recipe} key={recipe._id}/>
        ).slice(0,9)
        return (
            <div>
                <div className={"title text-center"}>
                    <h1>Na co masz ochotę?</h1>
                </div>
                <div className={"main"}>

                    <Form onAction={this.onSubmit}/>
                    <div className={"container"}>
                        <div className={"recipes-container"} style={{marginTop: "15%"}}>
                            {htmlList}
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Main;