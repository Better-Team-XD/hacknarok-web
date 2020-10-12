import React from "react";
import smartSearch from "smart-search"
import AutoCompleteListElement from "./AutoCompleteListElement";
import IngredientsAdded from "./IngredientsAdded";
import {host} from "./Host"

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            ingredientsList: [],
            searchText: "",
            searchResults: [],
            chosenIngredients: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.addIngredient = this.addIngredient.bind(this)
        this.deleteIngredient = this.deleteIngredient.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        fetch(`${host}api/v1/ingredients`)
            .then(response => response.json())
            .then(data => this.setState({
                ingredientsList: data.content,
                searchText: "",
                searchResults: [],
                chosenIngredients: []
            }))
            .then(() => console.log(this.state))
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value})

        const searchList = this.state.ingredientsList.filter(
            ingredient => !this.state.chosenIngredients.includes(ingredient)
        )
        let searchResults = value !== "" ?
            smartSearch(searchList, [value], {name: true}).map(element => element.entry) : []

        this.setState({"searchResults": searchResults})
    }

    addIngredient(ingredient) {
        this.setState(previousState => ({
            ingredientList: previousState.ingredientsList,
            searchText: "",
            searchResults: [],
            chosenIngredients: previousState.chosenIngredients.concat(ingredient)
        }))
    }

    deleteIngredient(key) {
        this.setState(previousState => ({
            ingredientList: previousState.ingredientsList,
            searchText: previousState.searchText,
            searchResults: previousState.searchResults,
            chosenIngredients: previousState.chosenIngredients.filter(ingredient => ingredient._id !== key)
        }))
    }

    onSubmit() {
        this.props.onAction(this.state.chosenIngredients)
        this.setState( previousState => ({
            ingredientList: [],
            searchText: "",
            searchResults: [],
            chosenIngredients: []
        }))
    }

    render() {
        const searchResultsHtml = this.state.searchResults.map(
            result => <AutoCompleteListElement ingredient={result} key={result._id} action={this.addIngredient}/>
        ).slice(0, 4)

        const addedIngredients = this.state.chosenIngredients.map(
            ingredient => <IngredientsAdded ingredient={ingredient} key={ingredient._id} action={this.deleteIngredient}/>
        )
        return (
            <div>
                <div className="md-form">
                    <input type="text" placeholder="Co masz w lodówce?" id="suffixInside" className="form-control"
                        name="searchText" autoComplete="off" value={this.state.searchText} onChange={this.handleChange}/>
                </div>
                <ul className="list-group">
                    {searchResultsHtml}
                </ul>
                <div className={"search-btn"}>
                    <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Szukaj</button>
                </div>
                <div className={"ingredients-added"}>
                    {addedIngredients}
                </div>
            </div>
        )
    }
}

export default Form;