import React, { Component } from 'react';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            dishes: DISHES
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes} />
                <Footer />

            </div>
        );
    }
}

export default App;