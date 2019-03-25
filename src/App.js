import React, { Component } from 'react';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Home from "./components/HomeComponent";
import { BrowserRouter} from 'react-router-dom';
import DishDetailComponent from "./components/DishDetailComponent";
import {Switch, Route, Redirect} from 'react-router-dom';



class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            dishes: DISHES
        };
    }

    render() {
        return (
            <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component = { Home } />
                    <Route exact path = '/menu' component = {() => <Menu dishes={this.state.dishes}/>} />
                    <Redirect to = '/home'/>
                </Switch>
                <Footer/>
            </div>
            </BrowserRouter>
        );
    }
}

export default App;