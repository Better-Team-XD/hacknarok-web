import React, { Component } from 'react';
import LandingPage from "./LandingPage";
import Recipes from "./Recipes";

class App extends Component {
    render() {
        return (
            <div className="App">
                <LandingPage/>
                <Recipes />
            </div>
        );
    }
}

export default App;