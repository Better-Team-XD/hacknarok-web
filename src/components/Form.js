import React from "react";
import IngredientsAdded from "./IngredientsAdded";
import AutoCompleteListElement from "./AutoCompleteListElement";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            ingredients: [],
            search: "",
            htmlList: "",
            elements: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("http://35.228.89.132/api/v1/ingredients")
            .then(response => response.json())
            .then(data => this.setState({
                ingredients: data,
                search: "",
                htmlList: "",
                elements: []
            }))
            .then(() => console.log(this.state))
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({[name]: value.toUpperCase()})

        let showList = []

        for (let i = 0; i < this.state.ingredients.length; i++){
            let a = this.state.ingredients[i].name
            if (a.toUpperCase().indexOf(this.state.search) > -1){
                showList.push(a)
            }
        }

        let htmlList = showList.map(element => <AutoCompleteListElement name={element} action={this.handleAdd}/>)
        this.setState({["htmlList"]: htmlList.slice(0, 3)})
    }

    capitialize(string){
        string = string.toLowerCase();
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    handleDelete(index){
        this.state.elements[index] = ""
        this.forceUpdate()
    }

    handleAdd(name) {
        let key = this.state.elements.length
        this.state.elements.push(<IngredientsAdded name={name} index={key} onDelete={this.handleDelete}/>)
        this.state.htmlList=""
        this.state.search=""
        this.forceUpdate()
    }

    handleSubmit(){

        this.props.onAction(this.state.elements)
        this.setState( previousState => ({
            ingredients: previousState.ingredients,
            search: "",
            htmlList: "",
            elements: []
        }))
    }

    render() {
        return (
            <div>

                <div className="md-form">
                    <input type="text" placeholder="Co masz w lodówce?" id="suffixInside" className="form-control"
                        name="search" onChange={this.handleChange} autoComplete="off" value={this.capitialize(this.state.search)}/>
                </div>

                <ul className="list-group">
                    {this.state.htmlList}
                </ul>
                <div className={"search-btn"}>
                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit} >Szukaj</button>
                </div>
                <div className={"ingredients-added"}>
                    {this.state.elements}
                </div>

            </div>
        )
    }
}
export default Form;